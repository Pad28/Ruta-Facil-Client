import React, { useState } from "react";
import { 
    ActivityIndicator,
    Alert,
    Keyboard, 
    KeyboardAvoidingView, 
    Platform, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    View 
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { StackLoginParams } from "../navigaton/LoginStackNavigation";
import { useHeaderLeftStack } from "../hooks/useHeaderLeftStack";
import { InputApp } from "../components/InputApp";
import { Boton } from "../components/Boton";
import { colors, styles } from "../theme/appTheme";
import { HeaderAppBotton } from "../components/HeaderAppBotton";
import { useForm } from "../hooks/useForm";
import { formularioRegistroType } from "../helpers/types/formualrioRegistroType";
import { useNewRegistro } from "../hooks/useNewRegistro";

interface Props extends StackScreenProps<StackLoginParams, 'RegistroScreen'> {};


export const RegistroScreen = ( { navigation }: Props ) => {
    useHeaderLeftStack({navigation, title: 'Registro'});
    const { onChange, form } = useForm<formularioRegistroType>({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
        confirmPassword: ''
    });

    const { newRegistro, isLoading, setIsLoading } = useNewRegistro();

    return (
        <KeyboardAvoidingView
            style={ styles.container } 
            behavior={Platform.OS == 'ios' ? 'padding' : 'height' }
        >   
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >    
                <View
                    style={{
                        ...styles.body,
                    }}
                >  
                    {/* <HeaderAppBotton 
                        navigation={navigation} 
                        title="Resgistro" 
                        style={{ flex: 1 }} 
                    /> */}
                    <View style={ localStyles.body } >
                        <InputApp 
                            texto="Nombre(s)" 
                            iconName="man"
                            action={texto => onChange(texto, 'nombre')}
                        />
                        <InputApp 
                            texto="Apellido(s)" 
                            iconName="man" 
                            action={texto => onChange(texto, 'apellido')}
                        />
                        <InputApp 
                            texto="Email" 
                            iconName="mail" 
                            action={texto => onChange(texto, 'email')}
                        />
                        <InputApp 
                            texto="Telefono" 
                            iconName="call" 
                            action={texto => onChange(texto, 'telefono')}
                        />
                        <InputApp  
                            texto="Contraseña" 
                            iconName="lock-closed" 
                            password={true} 
                            action={texto => onChange(texto, 'password')}
                        />
                        <InputApp 
                            texto="Confirmar contraseña" 
                            iconName="lock-closed" 
                            password={true} 
                            action={texto => onChange(texto, 'confirmPassword')}
                        />

                        <View style={{ marginTop: 50 }} >
                           {
                            (isLoading)
                                ? <ActivityIndicator size={60} color={colors.terciario} />
                                : (
                                    <Boton texto="Registrar"  
                                        action={() => {
                                                newRegistro(form)
                                                    .then(res => {
                                                        Alert.alert('Bienvenido!', 'Ahora puedes iniciar seción en RutaFacil')
                                                        navigation.replace('InicioSecionScreen');
                                                        console.log(res);
                                                        
                                                    })
                                                    .catch(err => {
                                                        Alert.alert('Error', err.message);
                                                        setIsLoading(false);
                                                    });
                                            }
                                        }
                                    />
                                )
                           }
                        </View>
                    </View>
                    
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const localStyles = StyleSheet.create({
    body: { 
        // flex: 9, 
        alignItems: 'center' }
});

