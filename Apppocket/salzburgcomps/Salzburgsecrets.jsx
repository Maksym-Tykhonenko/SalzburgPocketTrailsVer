import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shared, card } from '../salzburgconsts/salzburgstyles';
import { salzburglogo, secretsPreview } from '../trailimprts/trailimgs';
import { navigateArrow } from '../trailimprts/trailicns';


const Salzburgsecrets = () => {
    const navigation = useNavigation();

    return (
        <View style={shared.container}>

            <Image source={salzburglogo} style={[shared.logo, { alignSelf: 'flex-end', right: 20 }]} />
            
            <Text style={[shared.routeDesc, {marginBottom: 27}]}>Want to see Salzburg from an unexpected perspective? Discover where locals watch the sunset, sip the best coffee, and share stories you won't find in any guidebook.</Text>

            <View style={card.container}>
                <Text style={card.title}>Real places. Real locals</Text>
                <Text style={card.description}>📍Hidden gems, straight from Salzburgers.</Text>
                <Image source={secretsPreview} style={card.previewImage} />
                <TouchableOpacity
                    style={[card.navBtn, {left: 25}]}
                    onPress={() => navigation.navigate('Salzburgsecrettopics')}
                >
                    <Text style={card.navBtnText}>Let’s Go</Text>
                    <Image source={navigateArrow} style={card.navBtnIcon} />
                </TouchableOpacity>
            </View>

        </View>
    )
};

export default Salzburgsecrets;