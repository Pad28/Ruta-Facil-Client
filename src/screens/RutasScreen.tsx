import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonSelect } from '../components/BotonSelect';

export const RutasScreen = () => {
    const [selected, setSelected] = useState('');

    return (
        <View style={ styles.containerTabNav } >
            <Text> RutasScreen </Text>
            <BotonSelect opciones={['Opcion 1', 'Opcion 2', 'Opcion 3']} setState={setSelected} />
            <Text> { selected } </Text>
        </View>
    );
}
