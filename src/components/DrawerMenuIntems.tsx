import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/auhtContext/AuthContext';

interface Props {
    drawerProps: DrawerContentComponentProps;
    userName: string;
    userID: string;
}

export const DrawerMenuIntems = ({ drawerProps , userName, userID }: Props) => {
    const { navigation } = drawerProps;
    const { logOut, authState } = useContext(AuthContext);

    return (
        <DrawerContentScrollView>
            <View style={localStyles.imageContainer} >
                <Image
                    source={{ uri: authState.imageFile }}
                    style={ localStyles.image }
                />

                <Text style={ localStyles.nameText } > {userName} </Text>
            </View>
            <DrawerItem 
                icon={() => (
                    <View style={ localStyles.iconContainer } >
                        <Ionicons name='notifications' size={40} color={colors.fondo} />
                    </View>
                )}
                label={'Notificaciones'}
                labelStyle={ localStyles.menuTexto }
                onPress={() => {}}
                style={{ marginBottom: 24 }}
            />
            <DrawerItem 
                icon={() => (
                    <View style={ localStyles.iconContainer } >
                        <Ionicons name='cog' size={40} color={colors.fondo} /> 
                    </View>
                )}
                label={'Configuración'}
                labelStyle={ localStyles.menuTexto }
                onPress={() => {}}
                style={{ marginBottom: 24 }}
            />

            <DrawerItem 
                icon={() => (
                    <View style={ localStyles.iconContainer } >
                        <Ionicons name='log-out' size={40} color={colors.fondo} />
                    </View>
                )}
                label={'Cerrar sesión'}
                labelStyle={ localStyles.menuTexto }
                onPress={logOut}
            />

        </DrawerContentScrollView>
    );
}

const localStyles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        paddingTop: 30,
        marginBottom: 20
    },
    image: {
        borderRadius: 100,
        height: 160,
        width: 160,
    },
    nameText: {
        marginTop: 16,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    menuTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: -15,
        color: colors.fondo
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.terciario,
        height: 50,
        width: 50,
        borderRadius: 50
    }
});
