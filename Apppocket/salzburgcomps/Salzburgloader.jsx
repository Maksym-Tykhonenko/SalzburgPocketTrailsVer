import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shared, loader } from '../salzburgconsts/salzburgstyles';
import { logopart, salzburglogo } from '../trailimprts/trailimgs';

const Salzburgloader = () => {
    const navigation = useNavigation();

    const salzburgOpacity = useRef(new Animated.Value(0)).current;
    const pocketTrailsOpacity = useRef(new Animated.Value(0)).current;
    const underlineWidth = useRef(new Animated.Value(0)).current;
    const logoPartOpacity = useRef(new Animated.Value(0)).current;
    const logoOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(salzburgOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(pocketTrailsOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(underlineWidth, {
                toValue: 280,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(logoPartOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(logoOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View style={[shared.container, { justifyContent: 'center' }]}>
            
            <View style={{width: 58, height: 58, alignSelf: 'center', marginBottom: 20}}>
                <Animated.Image source={logopart} style={{ opacity: logoPartOpacity, resizeMode: "contain", position: 'absolute', top: 0, right: 0, width: 29, height: 26 }} />
                <Animated.Image source={salzburglogo}  style={{ opacity: logoOpacity, resizeMode: "contain", width: '100%', height: '100%' }} />
            </View>

            <Animated.Text style={[loader.text, { opacity: salzburgOpacity }]}>
                SALZBURG
            </Animated.Text>

            <Animated.Text style={[loader.text, { opacity: pocketTrailsOpacity }]}>
                POCKET TRAILS
            </Animated.Text>

            <Animated.View style={[loader.underline, { width: underlineWidth }]} />

        </View>
    )
};

export default Salzburgloader;