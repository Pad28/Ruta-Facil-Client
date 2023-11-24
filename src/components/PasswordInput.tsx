import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Dimensions, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';

interface Props {
    texto: string;
    width?: number;
    action?: (texto: string) => void;
}

const { width: widthWindow, height: heightWindow } = Dimensions.get('window');

export const PasswordInput = ( { texto, width = (widthWindow > 450) ? 350 : 300 , action }: Props ) => {

    const [ lock, setLock ] = useState(true);
    const [ icon, setIcon ] = useState('eye');

    return (
        <View
            style={{ 
                marginTop: ( heightWindow > 850 ) ? 50 : 40, 
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
                style={{ zIndex: 999 }}
            >
                <Ionicons 
                    size={34} 
                    name={ icon } 
                    style={{
                        marginTop: 3,
                        paddingBottom: 8,
                        marginLeft: -30 
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
