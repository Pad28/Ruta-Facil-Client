import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, heightWindow, styles } from '../theme/appTheme';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { StackAdminProps } from '../navigaton/StackAdminNavigation';
import { StackScreenProps } from '@react-navigation/stack';
import { Boton, InputApp, PasswordInput } from '../components';

interface Props extends StackScreenProps<StackAdminProps, 'AdminAdScreen'> {}
export const AdminAdScreen = ( { navigation }: Props ) => {
    return (
        <View style={ styles.containerTopTabNav } >
            <HeaderRutaDetail 
                onPressNavigate={() => navigation.pop()}
                title='Agregar Chofer'
            />
            <ScrollView>
                <InputApp 
                    texto='Nombre'
                    iconName='person'
                />
                
                <InputApp 
                    texto='Apellidos'
                    iconName='person'
                />
                <InputApp 
                    texto='Email'
                    iconName='mail'
                />
                <InputApp 
                    texto='Telefono'
                    iconName='call'
                />
                <PasswordInput 
                    texto="Constraseña" 
                    action={texto => {}}
                />
                <PasswordInput 
                    texto="Confirmar constraseña" 
                    action={texto => {}}
                />

                <View style={{ marginTop: 20, alignSelf: 'center' }} >
                    <Boton 
                        texto='Aceptar'
                    />
                </View>
                <View style={{ height: 60 }} />
            </ScrollView>
        </View>
    );
}


const localStyles = StyleSheet.create({
    headerContainer: {
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonPlus: {
        marginBottom: 14
    },
    modalView: {
        backgroundColor: colors.fondo,
        height: 300,
        width: 300,
        marginTop: heightWindow / 2 - 200,
        alignSelf: 'center',
        borderRadius: 18,
        elevation: 18,
        alignItems: 'center',
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