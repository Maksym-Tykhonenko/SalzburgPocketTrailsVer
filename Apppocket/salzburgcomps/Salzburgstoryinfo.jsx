import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shared, read, card, modal, upper } from '../salzburgconsts/salzburgstyles';
import { close, goback, showLocation, showFacts } from '../trailimprts/trailicns';
import LinearGradient from 'react-native-linear-gradient';

const Salzburgstoryinfo = ({ story }) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const showModal = (visible, content) => {
        setModalContent(content);
        setModalVisible(visible);
    };

    return (
        <View style={[shared.container, {paddingTop: 70}]}>

            <View style={card.container}>

                <View style={[shared.row, {paddingHorizontal: 10, alignItems: 'center', marginBottom: 13}]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={goback} style={upper.gobackArrow} />
                    </TouchableOpacity>
                    <Text style={[card.title, {marginBottom: 0}]}>{story.title.toUpperCase()}</Text>
                </View>

                <View style={{width: '100%'}}>
                    <View style={[shared.row, {justifyContent: 'space-between', position: 'absolute', top: 10, left: 7, paddingHorizontal: 10, alignItems: 'center', zIndex: 10}]}>
                        <TouchableOpacity onPress={() => showModal(true, { location: story.location, route: story.route })}>
                            <Image source={showLocation} style={[upper.gobackArrow, {width: 29, height: 29}]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => showModal(true, story.fact)}>
                            <Image source={showFacts} style={[upper.gobackArrow, {width: 29, height: 29}]} />
                        </TouchableOpacity>
                    </View>
                    <Image source={story.readImage} style={read.image} />
                </View>

            </View>

            <Text style={[card.description, {width: '100%', lineHeight: 20}]}>{story.description}</Text>

            <TouchableOpacity
                style={read.button}
                onPress={() => showModal(true, story.learnMore)}
            >
                <Text style={read.buttonText}>Learn more</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={modal.background}>
                    <View style={modal.container}>

                         <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={modal.closeBtn}
                            >
                                <Image
                                    source={close}
                                    style={modal.closeIcon}
                                />
                        </TouchableOpacity>
                        
                        <LinearGradient colors={['#A50D1E', '#5F050F']} style={modal.gradient}>
                            <View style={modal.inner}>

                                <ScrollView style={{width: '100%'}}>
                                    {Array.isArray(modalContent) ? (
                                        modalContent.map((item, index) => (
                                            <Text key={index} style={[modal.text, {marginBottom: 0}]}>{item}</Text>
                                        ))
                                        ) : typeof modalContent === 'string' ? (
                                            <Text style={modal.text}>{modalContent}</Text>
                                        ) : (
                                        <>
                                            {modalContent.location && (
                                                <Text style={modal.text}>📍 Location: {modalContent.location}</Text>
                                            )}
                                            {modalContent.route && (
                                                <Text style={modal.text}>🚶‍♀️ How to Get There:{'\n'}{modalContent.route}</Text>
                                            )}
                                        </>
                                    )}
                                </ScrollView>

                            </View>
                        </LinearGradient>            
                    </View>
                </View>
            </Modal>

        </View>
    )
};

export default Salzburgstoryinfo;