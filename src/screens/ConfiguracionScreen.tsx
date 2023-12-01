import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useContext, useState } from 'react'
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, Touchable, View } from 'react-native'

import { DrawerNavigationParams } from '../navigaton/DrawerMenu';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { styles, heightWindow, colors} from '../theme/appTheme';
import { BotonTarget } from '../components/BotonTarget';
import { Boton } from '../components';
import { VentanaModificacion } from '../components/VentanaModificacion';
import { useForm, usePutPeticion,  } from '../hooks';
import { formualrioUserModify } from '../interfaces/formularioUserModify';
import { UserAuthenticatedInterface } from '../interfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


interface Props extends DrawerScreenProps<DrawerNavigationParams, 'ConfiguracionScreen'> {}
export const ConfiguracionScreen = ( { navigation }: Props ) => {
    const { authState, logIn } = useContext(AuthContext);

    const userUndefined = { id: '', nombre: '', apellidos: '', correo: '', password: '', telefono: '' };
    const {
        id,
        nombre,
        apellidos,
        correo,
        password,
        telefono
    } = (authState.userAuthenticated) ? authState.userAuthenticated.user : userUndefined;
    
    const [ stateModal, setStateModal ] = useState('');
    const { form, onChange } = useForm<formualrioUserModify>({ 
        nombre, apellidos, correo, telefono, password: ''
    });

    const { isLoading, setIsLoading, peticion } = usePutPeticion(
        `/api/usuarios/${id}`,
        { headers: { 'api-key': authState.userAuthenticated?.token } }
    );

    return (
        <View 
            style={[ 
                styles.containerTabNav, 
                localStyles.container
            ]} 
        >   
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    
                    {
                        (isLoading)
                            ? (
                                <View
                                    style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}
                                >
                                    <ActivityIndicator size={80} />
                                </View>
                            ) : (
                                <>
                                <TouchableOpacity
                                    style={ localStyles.fotoContainer }
                                >
                                    <Image
                                        source={{ uri: authState.imageFile }}
                                        style={ localStyles.image }
                                    />
                                    <View
                                        style={ localStyles.fotoIconContainer }
                                    >
                                        <Ionicons name='camera' size={40} color={colors.fondo} />
                                    </View>
                                </TouchableOpacity>
                                
                                <View style={ localStyles.field } >
                                    <Text style={ localStyles.texto } >Nombre: </Text>
                                    <BotonTarget 
                                        texto={ form.nombre } 
                                        action={() => setStateModal('nombre-input')} 
                                    />
                                </View>
                                <View style={ localStyles.field } >
                                    <Text style={ localStyles.texto } >Apellidos: </Text>
                                    <BotonTarget 
                                        texto={ form.apellidos } 
                                        action={() => setStateModal('apellidos-input')} 
                                    />
                                </View>
                                <View style={ localStyles.field } >
                                    <Text style={ localStyles.texto } >Telefono: </Text>
                                    <BotonTarget 
                                        texto={ form.telefono }
                                        action={() => setStateModal('telefono-input')} 
                                    />
                                </View>
                                <View style={ localStyles.field } >
                                    <Text style={ localStyles.texto } >Correo: </Text>
                                    <BotonTarget 
                                        texto={ form.correo } 
                                        action={() => setStateModal('correo-input')} 
                                    />
                                </View>
                                <View style={ localStyles.field } >
                                    <Text style={ localStyles.texto } >Contraseña: </Text>
                                    <BotonTarget 
                                        texto={'**********'} 
                                        action={() => setStateModal('password-input')} 
                                    />
                                </View>

                                <View style={{ alignSelf: 'center', marginTop: 60 }} > 
                                    <Boton 
                                        texto='Aceptar'
                                        action={() => {
                                            peticion(form)
                                                .then(res => {
                                                    setIsLoading(false);
                                                    logIn(res as UserAuthenticatedInterface)
                                                })
                                                .catch(err => {
                                                    setIsLoading(false);
                                                    Alert.alert('Error', err.message);
                                                });
                                        }}
                                    />
                                </View>

                                </>
                            )
                    }

                    <VentanaModificacion 
                        onChangeText={(texto) => onChange(texto, 'nombre')} 
                        name='nombre-input'
                        placeholder={nombre}
                        type={ stateModal }
                        setStateType={setStateModal}
                    />
                    <VentanaModificacion 
                        onChangeText={(texto) => onChange(texto, 'apellidos')} 
                        name='apellidos-input'
                        placeholder={apellidos}
                        type={ stateModal }
                        setStateType={setStateModal}
                    />
                    <VentanaModificacion
                        onChangeText={(texto) => onChange(texto, 'telefono')} 
                        name='telefono-input'
                        placeholder={telefono}
                        type={ stateModal }
                        setStateType={setStateModal}
                    />
                    <VentanaModificacion 
                        onChangeText={(texto) => onChange(texto, 'correo')} 
                        name='correo-input'
                        placeholder={correo}
                        type={ stateModal }
                        setStateType={setStateModal}
                    />
                    <VentanaModificacion 
                        onChangeText={(texto) => {
                            if(texto.length > 0) onChange(texto, 'password');
                        }} 
                        name='password-input'
                        placeholder={'Contraseña'}
                        type={ stateModal }
                        setStateType={setStateModal}
                    />
                </ScrollView>

            </KeyboardAvoidingView>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        height: heightWindow - 110,
        alignItems: 'center',
    },
    image: {
        borderRadius: 100,
        height: 180,
        width: 180,
        marginTop: 20,
        alignSelf: 'center',
    },
    field: {
        marginTop: 23,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    texto: {
        fontSize: 20,
        marginRight: 6,
        fontWeight: 'bold'
    },
    fotoContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fotoIconContainer: {
        backgroundColor: colors.terciario,
        zIndex: 999,
        marginTop: 140,
        borderRadius: 100,
        padding: 8,
        marginLeft: -55,
    } 
});