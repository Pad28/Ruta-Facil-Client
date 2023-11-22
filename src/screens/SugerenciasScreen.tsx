import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const SugerenciasScreen = () => {
    return (
        <View style={[ styles.containerTabNav, { backgroundColor: 'blue' } ]} >
            <Text> SugerenciasScreen </Text>
        </View>
    );
}
