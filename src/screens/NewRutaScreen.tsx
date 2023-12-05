import React, { useState } from 'react'
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import { colors, heightWindow, styles } from '../theme/appTheme';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasAdminProps } from '../navigaton/StackRutasAdminNavigation';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { ItemBotonIconRight } from '../components/ItemBotonIconRight';
import { Boton } from '../components';

interface Props extends StackScreenProps<StackRutasAdminProps, 'NewRutaScreen'>{}

export const NewRutaScreen = ( { navigation, route }: Props ) => {
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

      const [markers, setMarkers] = useState<Object[]>();
     

    return (
        <View style={ styles.containerTopTabNav } >
            <HeaderRutaDetail 
                onPressNavigate={() => navigation.pop()}
                title={`${ruta.origen} - ${ruta.destino}`}
            />

            <ScrollView style={{ marginTop: 10 }} >
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
                    <Boton 
                        texto='Guardar'
                    />
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
                        >
                            <Marker
                                coordinate={origin}
                            />

                            <Marker 
                                coordinate={destination}
                            />

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
                                action={() => setShowModal(false)}
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
