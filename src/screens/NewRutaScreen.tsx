import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Modal, ScrollView, StyleSheet, View } from 'react-native';
import { colors, heightWindow, styles } from '../theme/appTheme';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasAdminProps } from '../navigaton/StackRutasAdminNavigation';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { ItemBotonIconRight } from '../components/ItemBotonIconRight';
import { Boton } from '../components';
import { usePutPeticion } from '../hooks';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { useBusquedas } from '../hooks/useBusquedas';
import { Ruta, RutasResponse } from '../interfaces/RutasResponse';
import { usePostpeticionAny } from '../hooks/usePostpeticionAny';

interface Props extends StackScreenProps<StackRutasAdminProps, 'NewRutaScreen'>{}

export const NewRutaScreen = ( { navigation, route }: Props ) => {
    const { userAuthenticated } = useContext(AuthContext).authState;
    const { ...ruta } = route.params;
    const [origin, setOrigin] = useState({
        latitude: 20.0904802,
        longitude: -98.3690922
      });
      const [destination, setDestination] = useState({
        latitude: 20.1204802,
        longitude: -98.3690922
      });

      const [showModal, setShowModal] = useState(false);
      const { peticion, isLoading, setIsLoading } = usePutPeticion(`/api/rutas/${ruta.numero}`, { 
        headers: { 'api-key': userAuthenticated?.token || '' }
      });
    const { busqueda, isLoading: isLoadingModelo, setisLoading: setIsLoadingModelo } = useBusquedas(ruta.numero, 'Ruta');
    const { isLoading: isLoadingPost, setIsLoading: setIsLoadingPost, peticion: peticionPost } = usePostpeticionAny('/api/paradas');  

    const [paradas, setParadas] = useState<any[]>([]);

    useEffect(() => {
        busqueda().then(res => {
            const rutaResponse = (res.rutas as Ruta);
            setDestination({
                latitude: (rutaResponse.latitudDestino) ? parseFloat(rutaResponse.latitudDestino) : 20.0904802,
                longitude: (rutaResponse.longitudDestino) ? parseFloat(rutaResponse.longitudDestino) : -98.3690922
            });

            setOrigin({
                latitude: (rutaResponse.latitudOrigen) ? parseFloat(rutaResponse.latitudOrigen) : 20.0904802,
                longitude: (rutaResponse.longitudOrigen) ? parseFloat(rutaResponse.longitudOrigen) : -98.3690922
            })

        }).catch(err => console.log(err)); 
    }, []);

    return (
        <View style={ styles.containerTopTabNav } >
            <HeaderRutaDetail 
                onPressNavigate={() => navigation.pop()}
                title={`${ruta.origen} - ${ruta.destino}`}
            />

            <ScrollView style={{ marginTop: 10 }} >
                
                {
                    (isLoadingModelo)
                        ?   <ActivityIndicator color={ colors.terciario } size={40} />
                        : (
                            <View style={ localStyles.containerMap } >
                    
                                <MapView
                                    style={ localStyles.map }
                                    initialRegion={{
                                        latitude: origin.latitude,
                                        longitude: origin.longitude,
                                        latitudeDelta: 0.09,
                                        longitudeDelta: 0.04,
                                    }}
                                >

                                    <Marker
                                        coordinate={origin}
                                        draggable
                                        onDragEnd={direction => setOrigin(direction.nativeEvent.coordinate)}
                                    />

                                    <Marker 
                                    draggable
                                    coordinate={destination}
                                    onDragEnd={direction => setDestination(direction.nativeEvent.coordinate)}
                                    />

                                    <MapViewDirections 
                                    origin={origin}
                                    destination={destination}
                                    apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY || ''}
                                    strokeColor='blue'
                                    strokeWidth={6}
                                    />

                                </MapView>
                            </View>
                        )
                }

                <View style={{ alignItems: 'center', marginTop: 10 }} >

                    <ItemBotonIconRight 
                        iconName='location'
                        colorIcon='black'
                        onPress={() => {}}
                        title='Modificar Paradas'
                        value={{}}
                        onPressText={() => setShowModal(true)}
                    />
                    <View>
                        <ItemBotonIconRight 
                            iconName='time'
                            colorIcon='black'
                            onPress={() => {}}
                            title='Modificar Horario'
                            value={{}}
                            onPressText={() => {
                                navigation.navigate('ModificarHorarioScreen', ruta);
                            }}
                        />
                    </View>
                        
                </View>

                <View style={{ marginVertical: 10, alignItems: 'center' }} >
                    {
                        (isLoading) 
                            ? <ActivityIndicator size={50} color={colors.terciario} /> 
                            : (
                                <Boton 
                                    texto='Guardar'
                                    action={() => {
                                        peticion({
                                            longitudDestino: destination.longitude,
                                            longitudOrigen: origin.longitude,
                                            latitudDestino: destination.latitude,
                                            latitudOrigen: origin.latitude
                                        }).then(res => {
                                            Alert.alert('Aviso', 'Cambios realizados exitosamente')
                                            setIsLoading(false);
                                        }).catch(err => {
                                            Alert.alert('Error', err.message)
                                            setIsLoading(false);
                                            
                                        })
                                    }}
                                />  
                            )
                    }
                </View>

            </ScrollView>

            <Modal
                animationType='slide'
                visible={showModal}
                transparent
            >
                <View style={ localStyles.containerModal } >
                        <MapView
                            style={{ height: 560, width: 350 }}
                            initialRegion={{
                                latitude: origin.latitude,
                                longitude: origin.longitude,
                                latitudeDelta: 0.09,
                                longitudeDelta: 0.04,
                            }}
                            onPress={(event) => {
                                const coordinate = event.nativeEvent.coordinate;
                                setParadas((currentMarkers) => [...currentMarkers, { coordinate }]);
                            }}
                            onLongPress={event => {
                                const coordinate = event.nativeEvent.coordinate;
                                setParadas((currentMarkers) => currentMarkers.filter((marker) => marker.coordinate.latitude !== coordinate.latitude || marker.coordinate.longitude !== coordinate.longitude));
 
                            }}
                        >
                            <Marker
                                coordinate={origin}
                            />

                            <Marker 
                                coordinate={destination}
                            />

                            {
                                paradas.map((marker, index) => (
                                    <Marker 
                                        key={index}
                                        coordinate={marker.coordinate}
                                        pinColor='blue'
                                    />
                                ))
                            }

                            <MapViewDirections 
                                origin={origin}
                                destination={destination}
                                apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY || ''}
                                strokeColor='blue'
                                strokeWidth={6}
                            />

                        </MapView>

                        <View style={{ alignItems: 'center', marginTop: 30 }} >
                            <Boton
                                texto='Guargar'
                                action={() => {
                                    setShowModal(false);
                                }}
                            />
                        </View>
                </View>
            </Modal>
        </View>
    );
}

const localStyles = StyleSheet.create({
    containerMap: {
        alignSelf: 'center',
        height: 350,
        width: 350,
        borderRadius: 18,
        overflow: 'hidden',
    },
    map: {
        height: '100%',
        width: '100%'
    },
    containerModal: {
        alignSelf: 'center',
        height: 700,
        width: 350,
        borderRadius: 8,
        elevation: 10,
        marginTop: (heightWindow / 2) - 350,
        backgroundColor: colors.fondo,
        overflow: 'hidden'
    }
});
