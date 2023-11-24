import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';

import * as FileSystem from 'expo-file-system';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeTabParams } from '../navigaton/HomeTabNavigator';
import { styles } from '../theme/appTheme';
import { BotonSelect } from '../components/BotonSelect';

interface Props extends BottomTabScreenProps<HomeTabParams, 'RutasScreen'> {};
export const RutasScreen = ( {}: Props ) => {
    const [selected, setSelected] = useState('');

    return (
        <View style={ styles.containerTabNav } >
            <Text> RutasScreen </Text>
            <BotonSelect opciones={['Opcion 1', 'Opcion 2', 'Opcion 3']} setState={setSelected} />
            <Text> { selected } </Text>
            <Button 
                title='Imprimir files' 
                onPress={async() => {
                    const dir = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory!);
                    console.log(dir);
                }}
            />
        </View>
    );
}

