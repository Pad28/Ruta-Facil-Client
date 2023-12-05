import React, { useRef, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasAdminProps } from '../navigaton/StackRutasAdminNavigation';
import MapView from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { Fab } from '../components/Fab';

interface Props extends StackScreenProps<StackRutasAdminProps, 'NewRutaScreen'>{}

export const NewRutaScreen = ( { navigation, route }: Props ) => {
    const { ...ruta } = route.params;
    const [origin, setOrigin] = useState({
        latitude: 33.64,
        longitude: -84.41
      });
      const [destination, setDestination] = useState({
        latitude: 33.75,
        longitude: -84.38
      });

      const mapViewRef = useRef<MapView>();  
      const { currentLocation, hasLocation } = useLocation();
      const centerPosition = async() => {
        const location = await currentLocation();
        mapViewRef.current?.animateCamera({
            center: { latitude: location!.latitude, longitude: location!.longitude }
        });
    }


    return (
        <View style={ styles.containerTopTabNav } >
            <HeaderRutaDetail 
                onPressNavigate={() => navigation.pop()}
                title={`${ruta.origen} - ${ruta.destino}`}
            />

            <ScrollView style={{ marginTop: 10 }} >
                <View style={ localStyles.containerMap } >
                    <MapView
                        ref={ el => mapViewRef.current = el! } 
                        showsUserLocation
                        style={ localStyles.map } 
                        initialRegion={{
                            latitude: origin.latitude,
                            longitude: origin.longitude,
                            latitudeDelta: 0.09,
                            longitudeDelta: 0.04
                          }}
                    >
                        <Fab
                            iconName='compass-outline'
                            onPress={() => centerPosition()}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0
                            }}
                        />


                    </MapView>
                </View>
            </ScrollView>
        </View>
    );
}

const localStyles = StyleSheet.create({
    containerMap: {
        height: 300,
        borderRadius: 18,
        overflow: 'hidden'
    },
    map: {
        height: '100%',
        width: '100%'
    }
});
