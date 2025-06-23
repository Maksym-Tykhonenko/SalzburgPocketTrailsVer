import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shared, loader, card } from '../salzburgconsts/salzburgstyles';
import salzburgonboard from '../salzburgconsts/salzburgonboard';
import { salzburglogo } from '../trailimprts/trailimgs';
import { navigateArrow } from '../trailimprts/trailicns';

const Salzburgonboard = () => {
    const navigation = useNavigation();
    const [step, setStep] = useState(0);

    return (
        <View style={shared.container}>

            <Image source={salzburglogo} style={[shared.logo, {marginTop: 50, position: 'static', marginBottom: 20}]} />

            <Text style={[loader.text, {marginBottom: 0}]}>
                SALZBURG
            </Text>

            <Text style={[loader.text, {marginBottom: 0}]}>
                POCKET TRAILS
            </Text>

            <View style={[loader.underline, { width: 280, marginBottom: 50 }]} />

            <View style={card.container}>

                <Text style={card.title}>{salzburgonboard[step].title.toUpperCase()}</Text>

                <Text style={[card.description, {textAlign: 'center'}]}>{salzburgonboard[step].text}</Text>

                <Image source={salzburgonboard[step].cover} style={card.previewImage} />

                <TouchableOpacity
                    style={[card.navBtn, {left: 25}]}
                    onPress={() => step === 2 ? navigation.navigate('Salzburgstories') : setStep((prev) => prev + 1)}
                >
                    <Text style={card.navBtnText}>{salzburgonboard[step].button}</Text>
                    <Image source={navigateArrow} style={card.navBtnIcon} />
                </TouchableOpacity>
            </View>

        </View>
    )
};

export default Salzburgonboard;