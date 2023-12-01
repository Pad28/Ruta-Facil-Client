import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../theme/appTheme';

interface Props {
    iconName: string;
    placeHolder: string;
    action: ( termino: string ) => void;
    color?: string;
    colorBoton?: string;
}

export const InputBotonRight = ( { 
    action, 
    iconName, 
    placeHolder, 
    color = 'gray', 
    colorBoton = colors.secundario 
}: Props ) => {
    const [ text, setText ] = useState('');

    return (
        <View
            style={ localStyles.container }
        >
            <TextInput 
                style={[ localStyles.input, { borderColor: color } ]}
                placeholder={placeHolder}
                onChangeText={(text) => setText(text)}
            />
            <TouchableOpacity
                style={[ localStyles.botonContainer, { backgroundColor: colorBoton } ]}
                onPress={() => {
                    action(text);
                }}
            >
                <Ionicons size={40} name={iconName} color={'white'} />
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 2,
        width: 300,
        fontSize: 20,
        height: 50,
        paddingHorizontal: 4
    },
    botonContainer: {
        marginBottom: 14,
        marginLeft: -40,
        padding: 4,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
