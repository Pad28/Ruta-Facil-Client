import React from 'react'
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Boton } from '../components';

export const AskLocationScreen = () => {
    return (
        <View style={[ styles.containerTopTabNav, { alignItems: 'center', justifyContent: 'center' } ]} >
            <Boton
                texto='Activar ubicacion'
            />
        </View>
    );
}