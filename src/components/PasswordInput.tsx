import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';

interface Props {
    texto: string;
    width?: number;
    action?: (texto: string) => void;
}

export const PasswordInput = ( { texto, width = 266, action }: Props ) => {

    const [ lock, setLock ] = useState(true);
    const [ icon, setIcon ] = useState('eye');

    return (
        <View
            style={{ 
                marginTop: 30, 
                flexDirection: 'row', 
                justifyContent: 'center',
                alignItems: 'center'
            }} 
        >   
            <Ionicons size={34} name='lock-closed' />
            <TextInput 
                style={{ ...localStyles.input, width }}
                placeholder={texto}
                secureTextEntry={ lock }
                onChangeText={action}
            />
            <TouchableWithoutFeedback
                onPress={() => {
                    setLock(!lock);
                    (icon === 'eye') ? setIcon('eye-off') : setIcon('eye');
                }}
            >
                <Ionicons 
                    size={34} 
                    name={ icon } 
                    style={{
                        marginTop: 3,
                        borderColor: 'black', 
                        borderBottomWidth: 1, 
                        paddingBottom: 8 
                        }} 
                />
            </TouchableWithoutFeedback>
        </View>
    );
}

const localStyles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        height: 50,
        fontSize: 20,
        paddingHorizontal: 14
    }
})
