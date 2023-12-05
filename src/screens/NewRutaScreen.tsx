import React, { useRef, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasAdminProps } from '../navigaton/StackRutasAdminNavigation';
import MapView from 'react-native-maps';
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

    return (
        <View style={ styles.containerTopTabNav } >
            <HeaderRutaDetail 
                onPressNavigate={() => navigation.pop()}
                title={`${ruta.origen} - ${ruta.destino}`}
            />

            <ScrollView style={{ marginTop: 10 }} >
                <View style={ localStyles.containerMap } >
                    <MapView
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
                            onPress={() => {}}
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
