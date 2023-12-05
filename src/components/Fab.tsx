import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    iconName: string,
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

export const Fab = ({ iconName, onPress, style = {}}: Props) => {
    return (
        <View style={{ ...style as any }} >
            <TouchableOpacity
                onPress={onPress}
                style={ localStyles.boton }
            >
                <Ionicons name={iconName} color={'white'} size={35} />
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    boton: {
        zIndex: 999,
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    }
});