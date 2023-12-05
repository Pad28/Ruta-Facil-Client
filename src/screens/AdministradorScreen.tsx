import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { colors, heightWindow, styles } from '../theme/appTheme';
import { InputBotonRight } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ItemBotonIconRight } from '../components/ItemBotonIconRight';
import { StackScreenProps } from '@react-navigation/stack';
import { StackAdminProps } from '../navigaton/StackAdminNavigation';

interface Props extends StackScreenProps<StackAdminProps, 'AdministradorScreen'> {}

export const AdministradorScreen = ( { navigation }: Props ) => {
    const [ refresh, setRefresh ] = useState(false);
    
    return (
        <View style={ styles.containerTopTabNav } >
            <View style={ localStyles.headerContainer } >
                <InputBotonRight 
                    placeHolder='Buscar'
                    iconName='reload'
                    colorBoton={colors.terciario}
                    action={() => setRefresh(!refresh)}
                    onCahgeText={(text) => {
                    }}
                />
                <TouchableOpacity
                    style={ localStyles.botonPlus }
                    onPress={() => navigation.navigate('AdminAdScreen')}
                >
                    <Ionicons 
                        name='add-circle'
                        color={colors.terciario}
                        size={58} 
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }} >
                <ItemBotonIconRight
                    colorIcon='red'
                    iconName='trash'
                    onPress={() => {}}
                    onPressText={() => {}}
                    title='Admin test1'
                    value={{}}
                />
                <ItemBotonIconRight
                    colorIcon='red'
                    iconName='trash'
                    onPress={() => {}}
                    title='Admin Test2'
                    value={{}}
                />
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