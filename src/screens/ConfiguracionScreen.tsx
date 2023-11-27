import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useContext, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

import { DrawerNavigationParams } from '../navigaton/DrawerMenu';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { styles, heightWindow} from '../theme/appTheme';
import { BotonTarget } from '../components/BotonTarget';
import { Boton } from '../components';
import { VentanaModificacion } from '../components/VentanaModificacion';
import { useForm } from '../hooks';
import { formualrioUserModify } from '../interfaces/formularioUserModify';


interface Props extends DrawerScreenProps<DrawerNavigationParams, 'ConfiguracionScreen'> {}
export const ConfiguracionScreen = ( { navigation }: Props ) => {
    const { authState } = useContext(AuthContext);
    const { 
        nombre,
        apellidos,
        correo,
        password,
        telefono
    } = (authState.userAuthenticated) ? authState.userAuthenticated.user : { nombre: '', apellidos: '', correo: '', password: '', telefono: '' };
    const [ stateModal, setStateModal ] = useState('');
    const { form, onChange } = useForm<formualrioUserModify>({ 
        nombre, apellidos, correo, telefono, password 
    });

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
                    <Image
                        source={{ uri: authState.imageFile }}
                        style={ localStyles.image }
                    />
                    
                    <View style={ localStyles.field } >
                        <Text style={ localStyles.texto } >Nombre: </Text>
                        <BotonTarget 
                            texto={ nombre } 
                            action={() => setStateModal('nombre-input')} 
                        />
                    </View>
                    <View style={ localStyles.field } >
                        <Text style={ localStyles.texto } >Apellidos: </Text>
                        <BotonTarget 
                            texto={ apellidos } 
                            action={() => setStateModal('apellidos-input')} 
                        />
                    </View>
                    <View style={ localStyles.field } >
                        <Text style={ localStyles.texto } >Telefono: </Text>
                        <BotonTarget 
                            texto={ telefono }
                            action={() => setStateModal('telefono-input')} 
                        />
                    </View>
                    <View style={ localStyles.field } >
                        <Text style={ localStyles.texto } >Correo: </Text>
                        <BotonTarget 
                            texto={ correo } 
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
                        />
                    </View>

                    <VentanaModificacion 
                        action={() => {}}
                        onChangeText={(texto) => onChange(texto, 'nombre')} 
                        name='nombre-input'
                        placeholder={nombre}
                        type={ stateModal }
                        setStateType={setStateModal}
                    />
                    <VentanaModificacion 
                        action={() => {}}
                        onChangeText={(texto) => onChange(texto, 'apellidos')} 
                        name='apellidos-input'
                        placeholder={apellidos}
                        type={ stateModal }
                        setStateType={setStateModal}
                    />
                    <VentanaModificacion
                        action={() => {}} 
                        onChangeText={(texto) => onChange(texto, 'telefono')} 
                        name='telefono-input'
                        placeholder={telefono}
                        type={ stateModal }
                        setStateType={setStateModal}
                    />
                    <VentanaModificacion 
                        action={() => {}} 
                        onChangeText={(texto) => onChange(texto, 'correo')} 
                        name='correo-input'
                        placeholder={correo}
                        type={ stateModal }
                        setStateType={setStateModal}
                    />
                    <VentanaModificacion 
                        action={() => {}} 
                        onChangeText={(texto) => onChange(texto, 'password')} 
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
        alignSelf: 'center'
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
    }
});