import React from 'react'
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, styles, widthWindow } from '../theme/appTheme';
import { BotonSelect } from '../components/BotonSelect';
import { ComboBox } from '../components/Combox';
import { Boton, InputApp } from '../components';

export const AdminReportesScreen = () => {
    
    return (
        <View style={{ flex: 1 }} >
            <View
                style={ localStyles.headerContainer }
            >
                <Text style={ localStyles.headerText } >Envia una notificaion a los usuarios</Text>
            </View> 

            <View style={[ styles.containerTopTabNav ]} >

                <View style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: 20 }} >
                    <Text style={[{ marginHorizontal: 6 }, localStyles.text]} >{`Selecciona un \ntipo de \nnotificaion`}</Text>
                    <ComboBox 
                        obtenerValue={() => {}}
                        values={[
                            { label: '', value: '' }
                        ]}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: 20 }} >
                    <Text style={[{ marginHorizontal: 6 }, localStyles.text]} >{`Selecciona la \nruta`}</Text>
                    <ComboBox 
                        obtenerValue={() => {}}
                        values={[
                            { label: '', value: '' }
                        ]}
                    />
                </View>

                <InputApp 
                    texto='Ingresa una descripcion'
                    iconName='pencil'
                />

                <View style={{ marginTop: 60, alignSelf: 'center' }} >
                    <Boton 
                        texto='Enviar'
                    />
                </View>

            </View>
        </View>
);

}
const localStyles = StyleSheet.create({
    headerContainer :{
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: colors.terciario,
        width: widthWindow - 20,
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.fondo
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    }
    
});