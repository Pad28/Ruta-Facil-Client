import React from 'react'
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/appTheme';

interface Props {
    texto: string;
    width?: number;
    visible: boolean;
    setVisible: (value: React.SetStateAction<boolean>) => void;
    action: () => void;
}

const { height: windowHeight } = Dimensions.get('window');
export const VentanaConfirmacion = ( { texto, width = 220, action, setVisible, visible }: Props ) => {

    return (
        <Modal
            transparent={true}
            animationType='slide'
            visible={visible}
        >
            <View
                style={[ localStyles.modalContainer, { width } ]}
            >
                <Text style={[ localStyles.textoStyle, {marginBottom: 24} ]} > { texto } </Text>
                <View style={{ flexDirection: 'row' }} >

                    {/* // Cancelar */}
                    <TouchableOpacity
                        style={[ localStyles.boton, { backgroundColor: 'red', marginRight: 20 } ]}
                        onPress={() => setVisible(false)}
                    >
                        <Text style={[ localStyles.textoStyle, { color: 'white' } ]} >Cancelar</Text>
                    </TouchableOpacity>

                    {/* Aceptar */}
                    <TouchableOpacity
                        style={[ localStyles.boton]}
                        onPress={action}
                    >
                        <Text style={[ localStyles.textoStyle, { color: 'white' } ]} >Aceptar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );
}

const localStyles = StyleSheet.create({
    modalContainer: {
        height: 160,
        backgroundColor: colors.fondo,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: (windowHeight / 2) - 110,
        borderRadius: 18,
        elevation: 40,
        paddingHorizontal: 8,
        paddingVertical: 16,
        justifyContent: 'center'
    },
    textoStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    boton: {
        backgroundColor: colors.secundario,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 12,
    }
});