import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/appTheme';

export const DrawerMenuIntems = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={localStyles.imageContainer} >
                <Image
                    source={ require('../../assets/avatar.jpeg') }
                    style={ localStyles.image }
                />
                <Text style={ localStyles.nameText } >AAAAAAA</Text>
            </View>
            <DrawerItem 
                icon={() => (
                    <View style={ localStyles.iconContainer } >
                        <Ionicons name='notifications' size={40}/>
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
                        <Ionicons name='cog' size={40}/>
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
                        <Ionicons name='log-out' size={40}/>
                    </View>
                )}
                label={'Cerrar sesión'}
                labelStyle={ localStyles.menuTexto }
                onPress={() => {}}
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
        marginLeft: -15
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
