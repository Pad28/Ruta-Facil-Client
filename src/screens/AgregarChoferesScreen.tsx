import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, heightWindow, styles } from '../theme/appTheme'
import { Boton, InputApp, InputBotonRight } from '../components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { HeaderRutaDetail } from '../components/HeaderRutaDetail'
import { StackScreenProps } from '@react-navigation/stack'
import { StackAdminChoferesProps } from '../navigaton/StackChoferesAdminNavigator'

interface Props extends StackScreenProps<StackAdminChoferesProps, 'AgregarChoferesScreen'> {}

export const AgregarChoferesScreen = ( { navigation }: Props ) => {
    
    return (
        <View style={ styles.containerTopTabNav } >
            <HeaderRutaDetail 
                onPressNavigate={() => navigation.pop()}
                title='Agregar Chofer'
            />
            <View>
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
                <View style={{ marginTop: 20, alignSelf: 'center' }} >
                    <Boton 
                        texto='Aceptar'
                    />
                </View>
            </View>
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