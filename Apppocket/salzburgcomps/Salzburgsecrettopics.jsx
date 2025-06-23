import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shared, secrets, card } from '../salzburgconsts/salzburgstyles';
import salzburgsecrets from '../salzburgconsts/salzburgsecrets';
import { navigateArrow } from '../trailimprts/trailicns';

const Salzburgsecrettopics = () => {
    const navigation = useNavigation();

    return (
        <View style={shared.container}>

            <Text style={[shared.routeDesc, { marginTop: 20, marginBottom: 37, alignSelf: 'center' }]}>A peaceful hilltop with forest trails and stunning views of Salzburg’s Old Town.</Text>
            
            <ScrollView style={{width: '100%'}}>
                {
                    salzburgsecrets.map((topic, i) => (
                        <TouchableOpacity
                            key={i}
                            style={secrets.button}
                            onPress={() => navigation.navigate('Salzburgsecretread', { secrets: topic.items })}
                        >
                            <Text style={secrets.buttonText}>{topic.question}</Text>
                            <View style={[card.navBtn, {position: 'static', alignSelf: 'flex-end', marginRight: -10, marginTop: -10}]}>
                                <Image source={navigateArrow} style={[card.navBtnIcon, {tintColor: '#FF0926'}]} />
                            </View>
                        </TouchableOpacity>
                    ))
                }
                <View style={{height: 200}} />
            </ScrollView>

        </View>
    )
};

export default Salzburgsecrettopics;