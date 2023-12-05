import React, { useContext, useState } from 'react'
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasFavoritasProps } from '../navigaton/StackFavoritasNavigator';
import { colors, styles } from '../theme/appTheme';
import { ItemType } from "react-native-dropdown-picker";
import { BotonSelect } from '../components/BotonSelect';
import { Boton } from '../components';
import { usePostpeticionAny } from '../hooks/usePostpeticionAny';
import { AuthContext } from '../context/auhtContext/AuthContext';


interface Props extends StackScreenProps<StackRutasFavoritasProps, 'RutaFavoritaScreen'>{}
export const RutaFavoritaScreen = ( { navigation, route }: Props ) => {
    const { ...ruta } = route.params;
    const [hora, setHora] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [sisHorario, setSisHorario] = useState<ItemType<string>>();

    const { authState } =  useContext(AuthContext);
    const { isLoading, setIsLoading, peticion } = usePostpeticionAny('/api/notificaciones/recordatorio');
    const { id } = route.params;

    return (
        <View style={ styles.containerTopTabNav } >
            <HeaderRutaDetail 
                title={`${ruta.origen} - ${ruta.destino}`}
                onPressNavigate={navigation.pop}
            />
            <ScrollView>
                <KeyboardAvoidingView>
                    <Text style={ localStyles.title } >
                        Programar recordatorio
                    </Text>

                    <View style={ localStyles.conteinerRow } >
                        <TextInput 
                            style={ localStyles.inputNumber }
                            keyboardType='numeric'
                            onChangeText={(text) => setHora(parseInt(text))}
                            placeholder='Hora'
                        />
                        <TextInput 
                            style={ localStyles.inputNumber }
                            keyboardType='numeric'
                            onChangeText={(text) => setMinutos(parseInt(text))}
                            placeholder='Minutos'
                        />

                        <BotonSelect 
                            opciones={['AM', 'PM']}
                            widthBoton={80}
                            style={{
                                justifyContent: 'space-evenly',
                                flexDirection: 'column'
                            }}
                            styleBoton={{ marginVertical: 4 }}
                            onPressArray={[
                                () => setSisHorario('AM' as ItemType<string>),
                                () => setSisHorario('PM' as ItemType<string>),
                            ]}
                        />
                    </View>

                    <View
                        style={{ alignSelf: 'center', marginTop: 100 }}
                    >
                        {
                            (isLoading)
                                ? (
                                    <ActivityIndicator 
                                        size={60}
                                        color={colors.terciario}
                                    />
                                ) :  (
                                    <Boton  
                                        texto='Aceptar'
                                        action={async() => {
                                        if(hora > 12 || minutos > 60 || hora < 0 || minutos < 0 || !sisHorario) {
                                            return Alert.alert('Error', 'Hora no valida');
                                        }

                                        peticion({
                                            id_usuario: authState.userAuthenticated?.user.id || '',
                                            hora: hora,
                                            minuto: minutos,
                                            horario: sisHorario,
                                            id_ruta: id
                                        }, {
                                            headers: { 'api-key': authState.userAuthenticated?.token || '' }
                                        })
                                        .then((res) => {
                                            setIsLoading(false);
                                            Alert.alert('Aviso', 'Recordatorio creado!');
                                        }).catch(err => {
                                            setIsLoading(false)
                                            Alert.alert('Error', err.message)
                                        });
                                    }}
                                />
                                )
                        }
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}

const localStyles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20
    },
    inputNumber: {
        borderWidth: 1,
        padding: 4,
        width: 100,
        height: 50,
        borderRadius: 6,
        margin: 10,
        textAlign: 'center',
        fontSize: 20
    },
    conteinerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
});