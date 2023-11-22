import React from "react";
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
import { useForm } from "../hooks/useForm";
import { usePeticionPost } from "../hooks/usePeticionPost";
import { formularioRegistroType, postNewUserType } from "../interfaces/formualrioRegistroType";
import { PasswordInput } from "../components/PasswordInput";


interface Props extends StackScreenProps<StackLoginParams, 'RegistroScreen'> {};

export const RegistroScreen = ( { navigation }: Props ) => {
    useHeaderLeftStack({navigation, title: 'Registro'});
    const { onChange, form } = useForm<formularioRegistroType>({
        nombre: '',
        apellidos: '',
        correo: '',
        telefono: '',
        password: '',
        confirmPassword: ''
    });

    const { 
        peticion, 
        isLoading, 
        setIsLoading 
    } = usePeticionPost<formularioRegistroType, postNewUserType>('/api/usuarios', form);

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
                    <View style={ localStyles.body } >
                        <InputApp 
                            texto="Nombre(s)" 
                            iconName="man"
                            action={texto => onChange(texto, 'nombre')}
                        />
                        <InputApp 
                            texto="Apellido(s)" 
                            iconName="man" 
                            action={texto => onChange(texto, 'apellidos')}
                        />
                        <InputApp 
                            texto="Email" 
                            iconName="mail" 
                            action={texto => onChange(texto, 'correo')}
                        />
                        <InputApp 
                            texto="Telefono" 
                            iconName="call" 
                            action={texto => onChange(texto, 'telefono')}
                        />
                        <PasswordInput 
                            texto="Constraseña" 
                            action={texto => onChange(texto, 'password')}
                        />
                        <PasswordInput 
                            texto="Confirmar constraseña" 
                            action={texto => onChange(texto, 'confirmPassword')}
                        />

                        <View style={{ marginTop: 50 }} >
                           {
                            (isLoading)
                                ? <ActivityIndicator size={60} color={colors.terciario} />
                                : (
                                    <Boton texto="Registrar"  
                                        action={() => {

                                            if(form.password !== form.confirmPassword) {
                                                return Alert.alert('Error', 'Las contraseñas no coinciden');
                                            }

                                            peticion({
                                                nombre: form.nombre,
                                                apellidos: form.apellidos,
                                                correo: form.correo,
                                                password: form.password,
                                                telefono: form.telefono  
                                            })
                                            .then(res => {
                                                navigation.replace('InicioSecionScreen');
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

