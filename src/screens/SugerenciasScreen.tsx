import React, { useContext, useEffect, useState }  from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, styles, widthWindow } from '../theme/appTheme';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeTabParams } from '../navigaton/HomeTabNavigator';
import { BotonSelect } from '../components/BotonSelect';
import { Boton } from '../components';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { useForm } from '../hooks';
import { formularioCreearReporteType } from '../interfaces/formularioCrearReporteType';
import { usePostpeticionAny } from '../hooks/usePostpeticionAny';

interface Props extends BottomTabScreenProps<HomeTabParams, 'SugerenciasScreen'> {}

export const SugerenciasScreen = ({ navigation }: Props) => {
    const { authState } = useContext(AuthContext);
    const [ tipoReporte, setTipoReporte ] = useState('');
    const [token, setToken] = useState('');
    const { onChange, form } = useForm<formularioCreearReporteType>({
        id_usuario: '',
        descripcion: '',
        tipo: ''
    });
    const { isLoading, setIsLoading, peticion } = usePostpeticionAny('/api/reportes');

    useEffect(() => {
        if(authState.userAuthenticated) {
            onChange(authState.userAuthenticated.user.id, 'id_usuario');
            setToken(authState.userAuthenticated.token);  
        } 
    }, []);

    return (
        <View style={{ flex: 1 }} >
            <View
                style={ localStyles.headerContainer }
            >
                <Text style={ localStyles.headerText } >Reporte/Sugerencia</Text>
            </View> 

            <View style={[ styles.containerTopTabNav ]} >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={ localStyles.scrollContainer }
                    >
                        {
                            (isLoading)
                                ? (
                                    <View  
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 200
                                        }}
                                    >
                                        <ActivityIndicator size={60} color={colors.terciario} />
                                    </View>
                                ) : (
                                    <>
                                        <Text
                                            style={[ styles.subtitulo ]}
                                        >  
                                            Seleccione un tipo de reporte
                                        </Text>
                                        <View style={{ marginTop: 14 }} >
                                            <BotonSelect 
                                                opciones={['Queja', 'Sugerencia']}
                                                widthBoton={130}
                                                setState={setTipoReporte}
                                                onPressArray={[
                                                    () => onChange('QUEJA', 'tipo'),
                                                    () => onChange('SUGERENCIA', 'tipo')
                                                ]}
                                            />
                                        </View>

                                        <Text
                                            style={[ styles.subtitulo, { marginTop: 34 } ]}
                                        >
                                            Detalles de la solicitud
                                        </Text>
                                        <TextInput 
                                            style={ localStyles.inputTextStyle }
                                            multiline
                                            numberOfLines={30}
                                            placeholder='Describe detalladamente tu solicitud'
                                            onChangeText={texto => onChange(texto, 'descripcion')}
                                        />

                                        <View
                                            style={[ localStyles.botonContainer ]}
                                        >
                                            <Boton 
                                                texto='Enviar'
                                                width={220}
                                                action={() => {
                                                    if(tipoReporte === '') {
                                                        return Alert.alert('Error', 'Completa todos los campos')
                                                    }
                                                    peticion(form, { headers: { 'api-key':  token} })
                                                        .then(res => {
                                                            setTipoReporte('');
                                                            setIsLoading(false);
                                                            console.log(form);
                                                            Alert.alert('Reporte enviado!', 'Gracias por compartir tu opinion con nosotros');
                                                        })
                                                        .catch(err => {
                                                            setIsLoading(false);
                                                            Alert.alert('Error', err.message)
                                                        });
                                                }}
                                            />
                                        </View>

                                    </>
                                )
                        }
                    </ScrollView>
                </KeyboardAvoidingView>
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
    scrollContainer: {
        paddingVertical: 16,
        paddingHorizontal: 20
    },
    inputTextStyle: {
        marginTop: 8,
        height: 180,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 14,
        textAlignVertical: 'top'
    },
    botonContainer: {
        marginTop: 30,
        alignItems: 'center'
    }
});
