import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';


export const HeaderDrawer = ( {toogle}: { toogle: () => void } ) => {
    return (
        <View
            style={[ localStyles.container, { marginTop: Constants.statusBarHeight } ]}
        >   
            <StatusBar backgroundColor={ colors.primario }/>
            <TouchableOpacity 
                style={ localStyles.boton } 
                onPress={toogle}
            >
                <Ionicons name='menu' size={40} color={'black'} />
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        backgroundColor: colors.primario
    },
    boton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 18,
        backgroundColor: colors.terciario, 
        borderRadius: 22,
        height: 50,
        width: 50,
    }
});
