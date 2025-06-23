import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useCallback } from 'react';

const useRamaDynamicRouteSynchronizer = () => {
    const navigation = useNavigation();
    const [activeTrailIdentifier, setActiveTrailIdentifier] = useState('Salzburgstories');

    const executeRouteTransition = useCallback((designatedTrailKey) => {
        if (typeof designatedTrailKey === 'string' && designatedTrailKey.length > 0) {
            navigation.navigate(designatedTrailKey);
        }
    }, [navigation]);

    const synchronizeActiveTrailState = useCallback(() => {
        const navigationStateSnapshot = navigation.getState?.();
        if (navigationStateSnapshot?.routes?.length > 0) {
            const activeStackEntry = navigationStateSnapshot.routes[navigationStateSnapshot.index];
            if (activeStackEntry?.name) {
                setActiveTrailIdentifier(activeStackEntry.name);
            }
        }
    }, [navigation]);

    useEffect(() => {
        synchronizeActiveTrailState();
        const detachListener = navigation.addListener('state', synchronizeActiveTrailState);
        return detachListener;
    }, [navigation, synchronizeActiveTrailState]);

    return {
        activeTrailIdentifier,
        executeRouteTransition
    };
};

export default useRamaDynamicRouteSynchronizer;