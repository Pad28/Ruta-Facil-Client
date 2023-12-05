import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';
import { Ruta } from '../interfaces/RutasResponse';

interface Props {
    value: {};
    onPress: () => void;
    title: string;
    iconName: string;
    colorIcon: string;
    onPressText?: () => void;
}

export const ItemBotonIconRight = ( { value, onPress, title, iconName, colorIcon, onPressText}: Props ) => {

    return (
        <View
            style={ localStyles.container }
        >
            <TouchableOpacity
                style={
                    localStyles.botonRuta
                }
                onPress={() => {
                    (onPressText) && onPressText();
                }}
            >
                <Text
                    style={ localStyles.botontexto }
                >
                    { title }
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={onPress}
                style={ localStyles.botonIcon }
            >    
                <Ionicons name={iconName} size={28} color={colorIcon} />
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
        height: 69,
        width: 320,
        marginVertical: 10
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
