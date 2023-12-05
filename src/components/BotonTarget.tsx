import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    texto: string;
    action?: () => void;

    width?: number;
    heigth?: number;
    iconName?: string;
}

export const BotonTarget = ( { action, texto, width = 230, iconName = 'pencil-outline', heigth }: Props ) => {
    return (
        <TouchableOpacity
            style={[ localStyles.container, { width, height: (heigth) && heigth } ]} 
            onPress={action}
        >
            <Text
                style={ localStyles.text }
            >
                { texto }
            </Text>
            <Ionicons name={iconName} size={26} />
        </TouchableOpacity>
    );
}

const localStyles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderRadius: 6,
        width: 230,
        backgroundColor: colors.fondo,
        paddingHorizontal: 16,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        width: '90%'
    },
});
