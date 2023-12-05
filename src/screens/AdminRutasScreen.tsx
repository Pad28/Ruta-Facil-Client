import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View, FlatList, TouchableOpacity, Alert, Modal, Text, Button } from 'react-native';
import { colors, heightWindow, styles } from '../theme/appTheme';
import { InputApp, InputBotonRight } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { useBusquedas } from '../hooks/useBusquedas';
import { RutasResponse } from '../interfaces';
import { ItemBotonIconRight } from '../components/ItemBotonIconRight';
import { usePeticionDelete } from '../hooks/usePeticionDelete';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { useForm } from '../hooks';
import { usePostpeticionAny } from '../hooks/usePostpeticionAny';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasAdminProps } from '../navigaton/StackRutasAdminNavigation';

interface Props extends StackScreenProps<StackRutasAdminProps, 'AdminRutasScreen'> {};
export const AdminRutasScreen = ( { navigation, route }: Props ) => {
    const { authState } = useContext(AuthContext);
    const { 
        busqueda, 
        isLoading, 
        results, 
        setTermino, 
        termino,
        setisLoading
    } = useBusquedas<RutasResponse>('true', 'Ruta');
    const [ refresh, setRefresh ] = useState(false);
    const { 
        isLoading: isLoadingDelete, 
        setIsLoading: setIsLoadingDelete, 
        peticion: peticonDelete 
    } = usePeticionDelete();
    const [ modal, setModal ] = useState(false);

    const { form, onChange } = useForm({
        destino: '',
        origen: ''
    });
    const { isLoading: isLoadingPost, setIsLoading: setIsLoadingPost, peticion: peticionPost } = usePostpeticionAny('/api/rutas');

    useEffect(() => {
        busqueda();
    }, [termino, refresh]);


    return (
        <View style={ styles.containerTopTabNav } >
            <View style={ localStyles.headerContainer } >
                <InputBotonRight 
                    placeHolder='Buscar'
                    iconName='reload'
                    colorBoton={colors.terciario}
                    action={() => setRefresh(!refresh)}
                    onCahgeText={(text) => {
                        (text === '' || !text) ? setTermino('true') : setTermino(text);
                    }}
                />
                <TouchableOpacity
                    style={ localStyles.botonPlus }
                    onPress={() => setModal(true)}
                >
                    <Ionicons 
                        name='add-circle'
                        color={colors.terciario}
                        size={58} 
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }} >
            {
                    (isLoading || isLoadingDelete )
                    ? <ActivityIndicator size={60} color={colors.terciario} style={{ marginTop: 120 }} />
                    : (
                        <Button
                            title='nav'
                            onPress={() => {
                                navigation.navigate('NewRutaScreen', results.rutas[0])
                            }} 
                        />
                        // <FlatList 
                        //     style={{ flex: 1 }}
                        //     data={results.rutas}
                        //     renderItem={({ item }) => (
                        //         <ItemBotonIconRight
                        //             onPressText={() => {
                        //                 navigation.navigate('NewRutaScreen', item);
                        //             }} 
                        //             colorIcon='red'
                        //             onPress={() => {
                        //                 peticonDelete(
                        //                     `/api/rutas/${item.numero}`, 
                        //                     { headers: { 'api-key': authState.userAuthenticated?.token || '' } }
                        //                 )
                        //                 .then(res => {
                        //                     setIsLoadingDelete(false);
                        //                     setRefresh(!refresh);
                        //                     Alert.alert('Aviso', 'Ruta eliminada');
                        //                 })
                        //                 .catch(err => {
                        //                     setRefresh(!refresh);
                        //                     setIsLoadingDelete(false);
                        //                     Alert.alert('Error', err.message);
                        //                 });
                        //             }}
                        //             iconName='trash'
                        //             value={{}}
                        //             title={`${item.origen} - ${item.destino}`}
                        //         />
                        //     )}
                        // />
                    )
            }
            </View>
            <Modal
                transparent
                visible={modal}
                animationType='slide'
            >
                <View style={ localStyles.modalView } >
                    
                    <InputApp 
                        texto='Origen'
                        iconName='location'
                        width={200}
                        action={(t) => onChange(t, 'origen')}
                    />

                     <InputApp 
                        texto='Destino'
                        iconName='location'
                        width={200}
                        action={(t) => onChange(t, 'destino')}
                    />
                    
                    <View style={{ flexDirection: 'row', marginTop: 30 }} >
                    {/* Aceptar */}
                    <TouchableOpacity
                        style={[ localStyles.boton, { marginRight: 30 } ]}
                        onPress={() => {
                            setModal(false);
                            setisLoading(true);
                            peticionPost(form, { headers: { 'api-key': authState.userAuthenticated?.token || '' } })
                                .then(res => {
                                    setisLoading(false);
                                    setRefresh(!refresh);
                                })
                                .catch(err => {
                                    Alert.alert('Error', err.message);
                                    setisLoading(false);
                                });
                        }}
                    >
                        <Text style={ localStyles.text } > Aceptar </Text>
                    </TouchableOpacity>
                    
                    {/* // Cancelar */}
                    <TouchableOpacity
                        style={ localStyles.boton }
                        onPress={() => setModal(false)}
                    >
                        <Text style={ localStyles.text } > Cancelar </Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
