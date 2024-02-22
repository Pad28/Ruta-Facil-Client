import * as Location from 'expo-location'
import { createContext, useEffect, useState } from 'react';
import { Alert, AppState, Linking } from 'react-native';

export interface PermissionState {
    locationStatus: Location.PermissionStatus;    
}

export const permissionsInitState: PermissionState = {
    locationStatus: Location.PermissionStatus.UNDETERMINED,
}

type PermissionsContextProps = {
    permissions: PermissionState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps);
export const PermissionsProvider = ( { chidren }: any ) => {

    const [ permissions, setPermissions ] = useState(permissionsInitState);
    // useEffect(() => {
        
    //     checkLocationPermission();
    //     AppState.addEventListener('change', state => {
    //         if( state !== 'active' ) return;
    //         checkLocationPermission();
    //     })

    // }, []);

    const askLocationPermission = async() => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if( status === Location.PermissionStatus.DENIED ) {
            return Linking.openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: status
        });
    }   

    const checkLocationPermission = async() => {
        let { status } = await Location.getForegroundPermissionsAsync();
        if(status !== 'granted') {
            return alert('Sin acceso a la ubicacion');
        }

        setPermissions({
            ...permissions,
            locationStatus: status
        });
    }
    
    return (
        <PermissionsContext.Provider
            value={{
                askLocationPermission,
                checkLocationPermission,
                permissions
            }}
        >
            { chidren }
        </PermissionsContext.Provider>
    );

}   