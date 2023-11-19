import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Touchable, View } from "react-native";
import { InputApp } from "../components/InputApp";
import { Boton } from "../components/Boton";
import { styles } from "../theme/appTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { StackLoginParams } from "../Navigaton/LoginStackNavigation";
import { useHeaderLeft } from "../hooks/useHeaderLeft";

interface Props extends StackScreenProps<StackLoginParams, 'RegistroScreen'> {};

export const RegistroScreen = ( { navigation }: Props ) => {

    useHeaderLeft({navigation, title: 'Registro'});

    const [state, setState] = useState('');

    return (
        <KeyboardAvoidingView
            style={ styles.container } 
            behavior={Platform.OS == 'ios' ? 'padding' : 'height' }
        >   
            <View
                style={{
                    ...styles.body,
                }}
            >      
                <InputApp 
                    texto="Nombre(s)" 
                    iconName="man"
                    action={(texto) => console.log(texto)}
                />
                <InputApp 
                    texto="Apellido(s)" 
                    iconName="man" 
                />
                <InputApp 
                    texto="Email" 
                    iconName="mail" 
                />
                <InputApp 
                    texto="Telefono" 
                    iconName="call" 
                />
                <InputApp  
                    texto="Contraseña" 
                    iconName="lock-closed" 
                    password={true} 
                />
                <InputApp 
                    texto="Confirmar contraseña" 
                    iconName="lock-closed" 
                    password={true} 
                />
                
                <View style={{ marginTop: 60 }} >
                    <Boton texto="Registrar"  />
                </View>
                
            </View>
        </KeyboardAvoidingView>
    );
}

