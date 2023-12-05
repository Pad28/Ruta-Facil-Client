import React, { useState } from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface Props {
    opciones: string[];
    setState?: (value: React.SetStateAction<string>) => void;

    widthBoton: number;
    onPressArray?: (() => void)[];
    style?: StyleProp<ViewStyle>;
    styleBoton?: StyleProp<ViewStyle>;
}

// El componente recobe un arreglo de string con la opciones o los botones a mostrar, 
// y tambien recibe el hook de useState para obtener el valor selecionado
export const BotonSelect = ( { opciones, setState, widthBoton, onPressArray, style, styleBoton }: Props ) => {
     const [ opcion, setOpcion ] = useState('');

    return (
        <View style={[ localStyles.container, style ]} >
            {
                opciones.map((element, i) => {
                    
                    return (
                        <TouchableOpacity
                            key={element}
                            style={[
                                localStyles.boton,
                                { width: widthBoton },
                                (opcion === element) && { backgroundColor: 'lightblue' },
                                styleBoton
                            ]}
                            onPress={() => {
                                setOpcion(element);
                                (setState) && setState(element);

                                (onPressArray) && onPressArray[i]()
                            }}
                        >
                            <Text style={ localStyles.textBoton } > {element} </Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }, 
    boton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    textBoton: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});
