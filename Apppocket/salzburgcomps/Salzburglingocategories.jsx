import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shared, secrets, card, read } from '../salzburgconsts/salzburgstyles';
import salzburglingo from '../salzburgconsts/salzburglingo';
import { navigateArrow, randomButton } from '../trailimprts/trailicns';
import React, { useState } from 'react';

const Salzburglingocategories = () => {
    const navigation = useNavigation();
    const [step, setStep] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [phrase, setPhrase] = useState(null);
    const [phraseIndex, setPhraseIndex] = useState(0);

    const getPhrase = () => {
        if (!selectedCategory) return;

        const items = selectedCategory.items;
        const nextIndex = phraseIndex % items.length;
        setPhrase(items[nextIndex]);
        setPhraseIndex(prev => prev + 1);
        setStep(2);
    };

    const getRandomPhrase = () => {
        if (!selectedCategory) return;

        const items = selectedCategory.items;
        const randomIndex = Math.floor(Math.random() * items.length);
        setPhrase(items[randomIndex]);
        setPhraseIndex(randomIndex);
        setStep(2);
    };

    return (
        <View style={shared.container}>
            
            <ScrollView style={{ width: '100%' }}>

                {
                    step === 0 && (
                        <View style={{ width: '100%' }}>
                            <Text style={[shared.routeDesc, { marginTop: 60, marginBottom: 20, alignSelf: 'center' }]}>Choose a category</Text>
                            {
                                salzburglingo.map((topic, i) => (
                                    <TouchableOpacity
                                        key={i}
                                        style={[
                                            secrets.button,
                                            {
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginBottom: 20,
                                                paddingHorizontal: 20,
                                                paddingVertical: 13,
                                                alignItems: 'center'
                                            }
                                        ]}
                                        onPress={() => {setSelectedCategory(topic); setStep((prev) => prev + 1)}}
                                    >
                                        <Text style={secrets.buttonText}>{topic.category}</Text>
                                        <View style={[card.navBtn, {position: 'static', marginRight: -10}]}>
                                            <Image source={navigateArrow} style={[card.navBtnIcon, {tintColor: '#FF0926'}]} />
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    )
                }

                {
                    (selectedCategory && step === 1) && (
                        <View style={{ width: '100%', flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity
                                style={[read.button, {marginBottom: 100, marginTop: 200}]}
                                onPress={getPhrase}
                            >
                                <Text style={read.buttonText}>Get a Phrase!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={getRandomPhrase}>
                                <Image
                                    source={randomButton}
                                    style={{ width: 50, height: 50, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }

                {
                    (phrase && step === 2) && (
                        <View style={{ width: '100%' }}>

                            <Text style={card.description}>{phrase.phrase}</Text>
                            <Text style={card.description}>{phrase.context}</Text>
                            <Text style={card.description}>{phrase.translation}</Text>

                            <Text style={[shared.routeDesc, { marginTop: 100, marginBottom: 20 }]}>Rate the Phrase</Text>
                            
                            {
                                ['❤️ Loved it', '😅 Funny', '😐 Didn’t get it'].map((reaction, i) => (
                                    <TouchableOpacity
                                        key={i}
                                        style={[
                                            secrets.button,
                                            {
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginBottom: 20,
                                                paddingHorizontal: 20,
                                                paddingVertical: 13,
                                                alignItems: 'center'
                                            }
                                        ]}
                                        onPress={() => setStep((prev) => prev + 1)}
                                    >
                                        <Text style={secrets.buttonText}>{reaction.toUpperCase()}</Text>
                                        <View style={[card.navBtn, {position: 'static', marginRight: -10}]}>
                                            <Image source={navigateArrow} style={[card.navBtnIcon, {tintColor: '#FF0926'}]} />
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }

                            <TouchableOpacity
                                style={[read.button, {marginTop: 100}]}
                                onPress={getPhrase}
                            >
                                <Text style={read.buttonText}>Give me another one!</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

                {
                    step === 3 && (
                        <View style={{ width: '100%' }}>

                            <Text style={[shared.routeDesc, { marginTop: 250, marginBottom: 120 }]}>“Thanks for your reaction! Every phrase brings you closer to speaking Salzburg like a local.”</Text>
                            
                            <TouchableOpacity
                                style={[read.button, {marginTop: 100}]}
                                onPress={() => {
                                    setStep(0);
                                    setSelectedCategory(null);
                                    setPhrase(null);
                                    setPhraseIndex(0);
                                }}
                            >
                                <Text style={read.buttonText}>Choose Another Category</Text>
                            </TouchableOpacity>

                        </View>
                    )
                }

                <View style={{height: 200}} />
            </ScrollView>

        </View>
    )
};

export default Salzburglingocategories;