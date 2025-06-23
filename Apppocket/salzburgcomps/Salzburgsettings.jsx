import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { shared, settings, modal, read } from '../salzburgconsts/salzburgstyles';
import { salzburglogo } from '../trailimprts/trailimgs';
import LinearGradient from 'react-native-linear-gradient';
import { musictrail, vibrotrail } from '../trailimprts/trailicns';
import { useSalzburgMusic } from '../appshared/Salzburgmusictrail';
import Slider from '@react-native-community/slider';

const Salzburgsettings = () => {
    const {
        isMusicPlaying,
        toggleSalzburgMusic,
        musicVolume,
        setMusicVolume
    } = useSalzburgMusic();
    const [vibroStatus, setVibroStatus] = useState(true);

    useEffect(() => {
        const loadVibroSetting = async () => {
            try {
            const stored = await AsyncStorage.getItem('SALZBURG_VIBRO_STATUS');
            if (stored !== null) setVibroStatus(JSON.parse(stored));
            } catch (error) {
            Alert.alert('Sorry', 'Error loading vibration setting');
            }
        };
        loadVibroSetting();
    }, []);

    const toggleVibroStorage = async () => {
        try {
            const newStatus = !vibroStatus;
            setVibroStatus(newStatus);
            await AsyncStorage.setItem('SALZBURG_VIBRO_STATUS', JSON.stringify(newStatus));
        } catch (error) {
            Alert.alert('Sorry', 'Error toggling vibration setting');
        }
    };

    const resetSalzburgProgress = async () => {
        try {
            await AsyncStorage.multiRemove([
            'SALZBURG_SAVED_STORIES',
            'SALZBURG_MUSIC_STATE',
            ]);

            await AsyncStorage.setItem('SALZBURG_VIBRO_STATUS', JSON.stringify(true));
            await AsyncStorage.setItem('SALZBURG_MUSIC_STATE', JSON.stringify(true));

            setVibroStatus(true);
            setMusicVolume(1);
            if (!isMusicPlaying) toggleSalzburgMusic();
            Alert.alert('Succes', 'Entire progress has been reset!');
        } catch (error) {
            Alert.alert('Sorry', 'Error resetting Salzburg progress');
        }
    };

    return (
        <View style={shared.container}>

            <Image source={salzburglogo} style={[shared.logo, { alignSelf: 'flex-end', right: 20 }]} />

            <View style={[modal.container, {width: '100%', alignSelf: 'center', marginTop: 50}]}>                
                <LinearGradient colors={['#A50D1E', '#5F050F']} style={modal.gradient}>
                    <View style={[modal.inner, {padding: 20}]}>

                        <View style={[shared.row, {alignItems: 'center', marginBottom: 23}]}>
                            <Image source={musictrail} style={settings.icon} />
                            <Text style={settings.label}>{'Music'.toUpperCase()}</Text>
                        </View>
                        <View style={settings.slider}>
                            <Slider
                                style={{ width: '100%' }}
                                minimumValue={0}
                                maximumValue={1}
                                step={0.01}
                                minimumTrackTintColor="#A50D1E"
                                maximumTrackTintColor="#707070"
                                thumbTintColor="#fff"
                                value={musicVolume}
                                onValueChange={(val) => {
                                    setMusicVolume(val);
                                    if (val === 0 && isMusicPlaying) toggleSalzburgMusic();
                                    if (val > 0 && !isMusicPlaying) toggleSalzburgMusic();
                                }}
                            />
                        </View>

                        <View style={[shared.row, {alignItems: 'center', justifyContent: 'space-between'}]}>
                            <View style={[shared.row, {alignItems: 'center', width: 'content'}]}>
                                <Image source={vibrotrail} style={[settings.icon, {width: 50, height: 50}]} />
                                <Text style={settings.label}>{'Vibration'.toUpperCase()}</Text>
                            </View>
                            <TouchableOpacity
                                style={[
                                    settings.switch,
                                    {
                                        borderColor: vibroStatus ? '#00E58A' : '#FE5467' 
                                    }
                                ]}
                                onPress={toggleVibroStorage}
                            >
                                <View style={[
                                    settings.switchInner,
                                    {
                                        borderColor: vibroStatus ? '#00E58A' : '#FE5467',
                                        alignSelf: vibroStatus ? 'flex-end' : 'flex-start'
                                    }
                                ]}
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={[read.button, { marginTop: 100 }]}
                             onPress={() => {
                                Alert.alert(
                                    'Reset Progress',
                                    'Are you sure you want to reset all Salzburg Pocket Trail progress? This action cannot be undone.',
                                    [
                                        {
                                            text: 'Cancel',
                                            style: 'cancel'
                                        },
                                        {
                                            text: 'Reset',
                                            style: 'destructive',
                                            onPress: resetSalzburgProgress
                                        }
                                    ],
                                    { cancelable: true }
                                );
                            }}
                        >
                            <Text style={read.buttonText}>Reset progress</Text>
                        </TouchableOpacity>

                    </View>
                </LinearGradient>            
            </View>

        </View>
    )
};

export default Salzburgsettings;