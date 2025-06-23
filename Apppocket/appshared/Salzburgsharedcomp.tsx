import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Salzburgnavipanel from './Salzburgnavipanel';
import Salzburgupperpanel from './Salzburgupperpanel';
import { compwrapper } from '../salzburgconsts/salzburgstyles';

interface SalzburgsharedcompProps {
    upper?: boolean;
    trailName: String;
    back?: boolean;
    comp: ReactNode;
    bottom?: boolean;
}

const Salzburgsharedcomp: React.FC<SalzburgsharedcompProps> = ({ upper, trailName, back, comp, bottom }) => {
    return (
        <View style={{ flex: 1 }}>
            
            <LinearGradient
                colors={['#A50D1E', '#5F050F']}
                style={StyleSheet.absoluteFillObject}
            />

            {upper && (
                <View style={compwrapper.upper}>
                    <Salzburgupperpanel trailName={trailName} back={back} />
                </View>
            )}

            <View style={compwrapper.trailComp}>{comp}</View>

            {bottom && (
                <View style={compwrapper.bottom}>
                    <Salzburgnavipanel />
                </View>
            )}  

        </View>   
    );
};

export default Salzburgsharedcomp;
