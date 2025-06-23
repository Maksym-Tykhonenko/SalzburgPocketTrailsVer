import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Modal } from 'react-native';
import { shared, adventure, card, upper, modal, read } from '../salzburgconsts/salzburgstyles';
import { adventuresPreview, salzburglogo } from '../trailimprts/trailimgs';
import { bridge1, bridge2, bridge3, fire, player, fail } from '../trailimprts/trailimgs';
import { navigateArrow } from '../trailimprts/trailicns';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const GRAVITY = 0.8;
const JUMP_STRENGTH = -15;
const PLAYER_SIZE = 60;
const BRIDGE_HEIGHT = 20;
const FIRE_SIZE = 30;
const BRIDGE_SPEED = 4;
const INITIAL_BRIDGE_Y = height * 0.7;

const initialBridges = [
  { id: 1, x: 0, width: width * 0.4, y: INITIAL_BRIDGE_Y },
  { id: 2, x: width * 0.5, width: width * 0.3, y: INITIAL_BRIDGE_Y - 100 },
  { id: 3, x: width * 0.9, width: width * 0.4, y: INITIAL_BRIDGE_Y - 50 }
];

const initialFires = [
  { id: 1, bridgeId: 1, x: 100, collected: false },
  { id: 2, bridgeId: 2, x: width * 0.5 + 50, collected: false },
  { id: 3, bridgeId: 3, x: width * 0.9 + 100, collected: false }
];

const SalzburgAdventure = () => {
    const [trailGameStarted, setTrailGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [playerY, setPlayerY] = useState(INITIAL_BRIDGE_Y - PLAYER_SIZE);
    const [bridges, setBridges] = useState(initialBridges);
    const [fires, setFires] = useState(initialFires);

    const velocityRef = useRef(0);
    const playerYRef = useRef(INITIAL_BRIDGE_Y - PLAYER_SIZE);
    const bridgesRef = useRef(initialBridges);
    const firesRef = useRef(initialFires);
    const gameLoopRef = useRef(null);
    const frameCount = useRef(0);
    const runningRef = useRef(false);
    
    const generateNewBridge = () => {
        const lastBridge = bridgesRef.current[bridgesRef.current.length - 1];
        const minWidth = width * 0.3;
        const maxWidth = width * 0.5;
        const gap = 80 + Math.random() * 60;

        const newWidth = minWidth + Math.random() * (maxWidth - minWidth);
        const newX = lastBridge.x + lastBridge.width + gap;
        const newY = INITIAL_BRIDGE_Y - Math.floor(Math.random() * 120);

        const newBridge = {
            id: lastBridge.id + 1,
            x: newX,
            width: newWidth,
            y: newY,
        };

        bridgesRef.current.push(newBridge);

        if (Math.random() < 0.6) {
            const newFire = {
            id: firesRef.current.length + 1,
            bridgeId: newBridge.id,
            x: newBridge.x + newBridge.width / 2,
            collected: false,
            };
            firesRef.current.push(newFire);
        }
    };


    const jump = () => {
        if (runningRef.current) {
        velocityRef.current = JUMP_STRENGTH;
        }
    };

    const resetGame = () => {
        velocityRef.current = 0;
        playerYRef.current = INITIAL_BRIDGE_Y - PLAYER_SIZE;
        bridgesRef.current = [...initialBridges];
        firesRef.current = [...initialFires];
        frameCount.current = 0;
        runningRef.current = true;

        setPlayerY(playerYRef.current);
        setBridges([...bridgesRef.current]);
        setFires([...firesRef.current]);
        setScore(0);
        setGameOver(false);
    };

    const gameLoop = () => {
        velocityRef.current += GRAVITY;
        playerYRef.current = Math.min(playerYRef.current + velocityRef.current, height);

        // Move bridges and remove off-screen ones
        bridgesRef.current = bridgesRef.current
        .map(b => ({ ...b, x: b.x - BRIDGE_SPEED }))
        .filter(b => b.x + b.width > -100);

        // Generate new bridge
        const lastBridge = bridgesRef.current[bridgesRef.current.length - 1];
        if (lastBridge.x + lastBridge.width < width) {
            generateNewBridge();
        }

        // Move and check fire collection
        firesRef.current = firesRef.current.map(f => {
        if (f.collected) return f;
        const bridge = bridgesRef.current.find(b => b.id === f.bridgeId);
        if (!bridge) return f;
        const newX = f.x - BRIDGE_SPEED;

        const playerRect = {
            left: 50,
            right: 50 + PLAYER_SIZE,
            top: playerYRef.current,
            bottom: playerYRef.current + PLAYER_SIZE
        };

        const fireRect = {
            left: newX,
            right: newX + FIRE_SIZE,
            top: bridge.y - FIRE_SIZE,
            bottom: bridge.y
        };

        if (
            playerRect.right > fireRect.left &&
            playerRect.left < fireRect.right &&
            playerRect.bottom > fireRect.top &&
            playerRect.top < fireRect.bottom
        ) {
            setScore(s => s + 1);
            return { ...f, x: newX, collected: true };
        }
        return { ...f, x: newX };
        });

        // Check if player is on bridge
        let onBridge = false;
        for (const b of bridgesRef.current) {
            const bridgeEnd = b.x + b.width;
            if (
                playerYRef.current + PLAYER_SIZE >= b.y - 5 &&
                playerYRef.current + PLAYER_SIZE <= b.y + BRIDGE_HEIGHT + 5 &&
                50 >= b.x - PLAYER_SIZE / 2 &&
                50 <= bridgeEnd
            ) {
                onBridge = true;
                playerYRef.current = b.y - PLAYER_SIZE;
                velocityRef.current = 0;
                break;
            }
        }

        if (!onBridge && playerYRef.current >= height - PLAYER_SIZE) {
            runningRef.current = false;
            setGameOver(true);
            cancelAnimationFrame(gameLoopRef.current);
            return;
        }

        frameCount.current++;
        if (frameCount.current % 4 === 0) {
            setPlayerY(playerYRef.current);
            setBridges([...bridgesRef.current]);
            setFires([...firesRef.current]);
        }

        gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    useEffect(() => {
        if (trailGameStarted) {
            runningRef.current = true;
            gameLoopRef.current = requestAnimationFrame(gameLoop);
        }
        return () => {
            cancelAnimationFrame(gameLoopRef.current);
        };
    }, [trailGameStarted]);

    return (
        <View style={shared.container}>
            <Image source={salzburglogo} style={[shared.logo, { alignSelf: 'flex-end', right: 20 }]} />

            {!trailGameStarted ? (
                <View style={{ width: '100%' }}>

                    <Text style={[shared.routeDesc, { marginBottom: 27 }]}>Jump across bridges, collect flames, and keep your torch burning to avoid it going out. Explore the city and unlock collectible postcards!</Text>
                    
                    <View style={card.container}>

                        <Text style={card.title}>Time's ticking!</Text>

                        <Text style={card.description}>📍Start the adventure!</Text>

                        <Image source={adventuresPreview} style={card.previewImage} />

                        <TouchableOpacity style={[card.navBtn, { left: 12 }]} onPress={() => setTrailGameStarted(true)}>
                            <Text style={[card.navBtnText, { marginRight: 15 }]}>Begin</Text>
                            <Image source={navigateArrow} style={card.navBtnIcon} />
                        </TouchableOpacity>

                    </View>

                </View>
            ) : (
                    <TouchableOpacity activeOpacity={1} onPress={jump} style={{ flex: 1 }}>
                        
                        <View style={[shared.row, { alignItems: 'center', position: 'absolute', top: 20, left: 20, width: 'content', alignSelf: 'flex-end' }]}>
                            <Image source={fire} style={upper.gobackArrow} />
                            <Text style={adventure.score}>{score}</Text>
                        </View>

                        <Image source={player} style={{ position: 'absolute', width: PLAYER_SIZE, height: PLAYER_SIZE, left: 50, top: playerY, resizeMode: 'contain' }} />

                        {bridges.map(b => (
                            <Image key={b.id} source={[bridge1, bridge2, bridge3][b.id % 3]} style={{ position: 'absolute', width: b.width, height: BRIDGE_HEIGHT, left: b.x, top: b.y, resizeMode: 'stretch' }} />
                        ))}

                        {fires.filter(f => !f.collected).map(f => {
                            const bridge = bridges.find(b => b.id === f.bridgeId);
                            return bridge ? (
                                <Image key={f.id} source={fire} style={{ position: 'absolute', width: FIRE_SIZE, height: FIRE_SIZE, left: f.x, top: bridge.y - FIRE_SIZE, resizeMode: 'contain' }} />
                            ) : null;
                        })}

                        {gameOver && (
                            <Modal
                                visible={gameOver}
                                animationType="fade"
                                transparent={true}
                            >
                                <View style={modal.background}>
                                    <View style={modal.container}>                
                                        <LinearGradient colors={['#A50D1E', '#5F050F']} style={modal.gradient}>
                                            <View style={[modal.inner, {padding: 20}]}>
                                                <Text style={card.title}>{'Well, that didn’t go as planned…'.toUpperCase()}</Text>
                                                <Image source={fail} style={adventure.failImage} />
                                                <TouchableOpacity style={read.button} onPress={resetGame}>
                                                    <Text style={read.buttonText}>Try Again</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </LinearGradient>            
                                    </View>
                                </View>
                            </Modal>
                        )}
                    </TouchableOpacity>
                )}
            </View>
        );
    };

export default SalzburgAdventure;
