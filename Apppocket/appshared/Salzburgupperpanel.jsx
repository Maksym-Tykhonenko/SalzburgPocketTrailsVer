import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { upper } from "../salzburgconsts/salzburgstyles";
import { goback } from "../trailimprts/trailicns";

const Salzburgupperpanel = ({ trailName, back }) => {
    const navigation = useNavigation();

    return (
        <View style={upper.container}>
            {back && (
                <TouchableOpacity
                    style={{marginRight: 8}}
                    onPress={() => navigation.goBack()}>
                    <Image
                        source={goback}
                        style={upper.gobackArrow} />
                </TouchableOpacity>
            )}
            {
                trailName && (
                    <Text style={[
                        upper.route,
                        trailName === 'Discovery Collection' && { width: 200 },
                        trailName === 'Adventure in Salzburg' && { width: 240 },
                        (back && trailName === 'Locals Secrets') && { width: 270 },
                        (back && trailName === 'Local Lingo') && { width: 220 },
                        trailName === 'Settings' && { width: 160 },
                    ]}
                    >
                        {trailName.toUpperCase()}
                    </Text>
                )
            }
        </View>
    )
};

export default Salzburgupperpanel;