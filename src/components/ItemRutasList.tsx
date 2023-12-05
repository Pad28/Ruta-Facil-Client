import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';
import { Ruta } from '../interfaces/RutasResponse';

interface Props {
    ruta: Ruta;
    marcado: boolean;

    onPressRuta: () => void;
    onPressIcon: (fav: boolean ) => void;
}

export const ItemRutasList = ( { ruta, onPressIcon, onPressRuta, marcado }: Props ) => {
    const [icon, setIcon] = useState((marcado) ? 'star' : 'star-outline');

    return (
        <View
            style={ localStyles.container }
        >
            <TouchableOpacity
                style={
                    localStyles.botonRuta
                }
                onPress={onPressRuta}
            >
                <Text
                    style={ localStyles.botontexto }
                >
                    { ruta.origen } - { ruta.destino }
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={ localStyles.botonIcon }
                onPress={() => {
                    (icon === 'star') ? setIcon('star-outline') : setIcon('star');
                    onPressIcon( ((icon === 'star') ? true : false));
                }}
            >
                <Ionicons name={icon} size={28} color={colors.secundario} />
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.fondo,
        borderRadius: 10,
        height: 50
    },
    botonRuta: {
        padding: 10,
        flex: 8,
        height: 50,
        justifyContent: 'center'
    },
    botontexto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    botonIcon: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 8,

        // backgroundColor: colors.terciario,
        borderRadius: 100
    }
});
