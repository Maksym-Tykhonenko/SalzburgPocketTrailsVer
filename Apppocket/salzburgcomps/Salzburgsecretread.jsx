import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shared, upper, read, card, modal } from '../salzburgconsts/salzburgstyles';
import { secretsPreview } from '../trailimprts/trailimgs';
import { navigateArrow, showLocation, close, copy } from '../trailimprts/trailicns';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';

const Salzburgsecretread = ({ secrets }) => {
    const navigation = useNavigation();
    const [currentSecretIndex, setCurrentSecretIndex] = useState(0);
    const [step, setStep] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const showModal = (visible, content) => {
        setModalContent(content);
        setModalVisible(visible);
    };

    return (
        <View style={shared.container}>

            {/* <ScrollView style={{ width: '100%' }}> */}
                
                {
                    step === 0 && (
                        <View style={{ width: '100%' }}>

                            <Text style={[shared.routeDesc, {marginBottom: 30, marginTop: 20}]}>A peaceful hilltop with forest trails and stunning views of Salzburg’s Old Town.</Text>
                            
                            <View style={card.container}>
                                <Text style={card.title}>{secrets[currentSecretIndex].title}</Text>
                                <Image source={secretsPreview} style={card.previewImage} />
                                <TouchableOpacity
                                    style={card.navBtn}
                                    onPress={() => setStep(1)}
                                >
                                    <Text style={card.navBtnText}>About</Text>
                                    <Image source={navigateArrow} style={card.navBtnIcon} />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={read.button}
                                onPress={() => (currentSecretIndex < secrets.length - 1) ?
                                    setCurrentSecretIndex((prev) => prev + 1)
                                    : setCurrentSecretIndex(0)
                                }>
                                <Text style={read.buttonText}>Next location</Text>
                            </TouchableOpacity>

                        </View>
                    )
                }

                {
                    step === 1 && (
                        <View style={{ width: '100%', flexGrow: 1 }}>

                            <View style={card.container}>

                                <View style={[shared.row, {paddingHorizontal: 10, alignItems: 'flex-start', marginBottom: 13}]}>
                                    <TouchableOpacity onPress={() => showModal(true, secrets[currentSecretIndex].location)}>
                                        <Image source={showLocation} style={[upper.gobackArrow, {width: 29, height: 29}]} />
                                    </TouchableOpacity>
                                    <Text style={[card.title, {marginBottom: 0}]}>{secrets[currentSecretIndex].title}</Text>
                                </View>

                                <Image source={secrets[currentSecretIndex].cover} style={read.image} />

                            </View>

                            <Text style={[card.description, {width: '100%', lineHeight: 20}]}>{secrets[currentSecretIndex].description}</Text>
                            
                            <TouchableOpacity
                                style={[read.button, {position: 'absolute', bottom: 50, alignSelf: 'center'}]}
                                onPress={() => setStep(2)}
                            >
                                <Text style={read.buttonText}>Local’s Secret</Text>
                            </TouchableOpacity>

                        </View>
                    )
                }

                {
                    step === 2 && (
                        <View style={{ width: '100%', flexGrow: 1 }}>

                            <View style={card.container}>

                                <View style={[shared.row, {paddingHorizontal: 10, alignItems: 'flex-start', marginBottom: 13}]}>
                                    <TouchableOpacity onPress={() => showModal(true, secrets[currentSecretIndex].location)}>
                                        <Image source={showLocation} style={[upper.gobackArrow, {width: 29, height: 29}]} />
                                    </TouchableOpacity>
                                    <Text style={[card.title, {marginBottom: 0}]}>{secrets[currentSecretIndex].title}</Text>
                                </View>

                                <Image source={secrets[currentSecretIndex].cover} style={read.image} />

                            </View>

                            <Text style={[card.description, {width: '100%', lineHeight: 20}]}>{secrets[currentSecretIndex].secret}</Text>
                            
                            <TouchableOpacity
                                style={[read.button, {position: 'absolute', bottom: 50, alignSelf: 'center'}]}
                                onPress={() => navigation.navigate('Salzburgsecrettopics')}
                            >
                                <Text style={read.buttonText}>Back to List</Text>
                            </TouchableOpacity>

                        </View>
                    )
                }

            {/* </ScrollView> */}

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
                            <View style={[modal.inner, {flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', paddingTop: 60}]}>

                                <Text style={[modal.text, {width: '80%'}]}>📍 Location: {modalContent}</Text>

                                <TouchableOpacity onPress={() => {
                                    Clipboard.setString(modalContent);
                                    Alert.alert("Copied", "Location copied to clipboard.");
                                }}>
                                    <Image source={copy} style={[upper.gobackArrow, {width: 29, height: 29, marginRight: 0}]} />
                                </TouchableOpacity>

                            </View>
                        </LinearGradient>            
                    </View>
                </View>
            </Modal>
            

        </View>
    )
};

export default Salzburgsecretread;