import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import trailnavigation from '../salzburgconsts/trailnavigation';
import useRamaDynamicRouteSynchronizer from './Salzburgusenavi';
import { bottom } from '../salzburgconsts/salzburgstyles';
import LinearGradient from 'react-native-linear-gradient';

const Salzburgnavipanel: React.FC = () => {
    const { activeTrailIdentifier, executeRouteTransition } = useRamaDynamicRouteSynchronizer();

    return (
        <View style={{ width: '100%', height: 100 }}>
            <LinearGradient
                colors={['rgba(165, 13, 30, 0)', '#5F050F']}
                style={{ ...StyleSheet.absoluteFillObject }}
            />

            <View style={bottom.container}>
                {
                    trailnavigation.map((trail, j) => (
                        <TouchableOpacity
                            key={j}
                            onPress={() => executeRouteTransition(trail.trailroute)}
                        >
                            <Image
                                source={trail.button}
                                style={[
                                    bottom.buttonIcon,
                                    activeTrailIdentifier === trail.trailroute && { tintColor: '#FF0926' }
                                ]}
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>

        </View>
    );
};

export default Salzburgnavipanel;