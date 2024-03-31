import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightWindow, colors } from '../theme/appTheme';
import { InputAppIconRight } from './InputAppIconRight';

interface Props {
    visible?: boolean;
    placeholder?: string;
    setVisible?: (value: React.SetStateAction<boolean>) => void;
    action?: () => void;
    onChangeText: (text: string) => void;

    name: string;
    setStateType?: (value: React.SetStateAction<string>) => void;
    type?: string;
}

export const VentanaModificacion = ( { visible, setVisible, action, placeholder = 'Test', setStateType, type, name, onChangeText }: Props ) => {
    return(
        <Modal
            transparent={true}
            animationType='slide'
            visible={(visible) ? visible : (type === name)}
        >
            <View
                style={ localStyles.container }
            >

                <InputAppIconRight 
                    texto={ placeholder } 
                    iconName='pencil-outline' 
                    width={200}
                    action={onChangeText}  
                />
                <View
                    style={ localStyles.botonContainer }
                >  
                    <View style={ localStyles.botonContainer } >
                        {/* // Aceptar */}
                        <TouchableOpacity
                            style={[ localStyles.boton, { marginRight: 30 } ]}
                            onPress={() => {
                                (setVisible) && setVisible(false);
                                (setStateType) && setStateType('');
                                (action) && action();
                            }}
                        >
                            <Text style={ localStyles.text } > Aceptar </Text>
                        </TouchableOpacity>
                        

                        {/* // Cancelar */}
                        <TouchableOpacity
                            style={[ localStyles.boton, { backgroundColor: 'red' } ]}
                            onPress={() => {
                                (setVisible) && setVisible(false);
                                (setStateType) && setStateType('');
                            }}
                        >
                            <Text style={ localStyles.text } > Cancelar </Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        </Modal>
    );
}

const localStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.fondo,
        height: 200,
        width: 300,
        marginTop: heightWindow / 2 - 150,
        alignSelf: 'center',
        borderRadius: 18,
        elevation: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    boton: {
        backgroundColor: colors.secundario,
        height: 50,
        width: 100,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.fondo
    }
});
