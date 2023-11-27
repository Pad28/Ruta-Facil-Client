import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    texto: string;
    action?: () => void;
}

export const BotonTarget = ( { action, texto }: Props ) => {
    return (
        <TouchableOpacity
            style={ localStyles.container } 
            onPress={action}
        >
            <Text
                style={ localStyles.text }
            >
                { texto }
            </Text>
            <Ionicons name='pencil-outline' size={26} />
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
