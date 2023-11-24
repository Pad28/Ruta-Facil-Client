import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    opciones: string[];
    setState: (value: React.SetStateAction<string>) => void;
}

// El componente recobe un arreglo de string con la opciones o los botones a mostrar, 
// y tambien recibe el hook de useState para obtener el valor selecionado
export const BotonSelect = ( { opciones, setState }: Props ) => {
     const [ opcion, setOpcion ] = useState('');

    return (
        <View style={ localStyles.container } >
            {
                opciones.map((element) => {
                    
                    return (
                        <TouchableOpacity
                            style={[ localStyles.boton, (opcion === element) && { backgroundColor: 'lightblue' } ]}
                            onPress={() => {
                                setOpcion(element);
                                setState(element);
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
        borderRadius: 10
    },
    textBoton: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});
