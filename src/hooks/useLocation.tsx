import React, { useContext, useEffect, useState } from 'react'
import * as Location from 'expo-location';
import { LocationInterface } from '../interfaces/LocationInerface';
import { PermissionsContext } from '../context/PermissionsContext.tsx/PermissionsContext';

export const useLocation = () => {
    
    const [hasLocation, sethasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<LocationInterface>();
    const { askLocationPermission, checkLocationPermission } = useContext(PermissionsContext);

    useEffect(() => {
        currentLocation();
    }, []);

    const currentLocation = () => {

        askLocationPermission();
        return Location.getCurrentPositionAsync()
            .then(({ coords }) => {
                setInitialPosition({
                    latitud: coords.latitude,
                    longitud: coords.longitude
                });

                sethasLocation(true);
                return coords;
            })
            .catch(err => console.log(err));
    }

    return {
        hasLocation,
        initialPosition,
        currentLocation
    };
}