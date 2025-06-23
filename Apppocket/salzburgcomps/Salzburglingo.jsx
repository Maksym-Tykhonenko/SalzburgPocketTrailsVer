import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shared, card } from '../salzburgconsts/salzburgstyles';
import { lingoPreview, salzburglogo } from '../trailimprts/trailimgs';
import { navigateArrow } from '../trailimprts/trailicns';


const Salzburglingo = () => {
    const navigation = useNavigation();

    return (
        <View style={shared.container}>

            <Image source={salzburglogo} style={[shared.logo, { alignSelf: 'flex-end', right: 20 }]} />
            
            <Text style={[shared.routeDesc, {marginBottom: 27}]}>Learn to speak like a true Salzburger!Every day — a new word or expression in the local dialect, with explanations, examples, and a chance to try it yourself.</Text>

            <View style={card.container}>
                <Text style={card.title}>Speaking Salzburg?</Text>
                <Text style={card.description}>📍Learn it, say it, wow the locals!</Text>
                <Image source={lingoPreview} style={card.previewImage} />
                <TouchableOpacity
                    style={[card.navBtn, {left: 12}]}
                    onPress={() => navigation.navigate('Salzburglingocategories')}
                >
                    <Text style={[card.navBtnText, {marginRight: 15}]}>Here We Go</Text>
                    <Image source={navigateArrow} style={card.navBtnIcon} />
                </TouchableOpacity>
            </View>

        </View>
    )
};

export default Salzburglingo;