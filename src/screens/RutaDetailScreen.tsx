import React, { useContext} from 'react'
import { StyleSheet, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasParams } from '../navigaton/StackRutasNavigator';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { BotonTarget } from '../components/BotonTarget';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

interface Props extends StackScreenProps<StackRutasParams, 'RutaDetailScreen'> {}

export const RutaDetailScreen = ( { navigation, route }: Props ) => {
    const { authState } = useContext(AuthContext);
    const { ...ruta } = route.params;

    return (
        <View
            style={[
                styles.containerTopTabNav
            ]}
        >
            <HeaderRutaDetail 
                title={`${ruta.origen} - ${ruta.destino}`}
                onPressNavigate={navigation.pop}
            />
            <View 
                style={ localStyles.containerMap }
            >
                <MapView 
                    style={{ height: '100%', width:'100%' }}
                    initialRegion={{
                        latitude: parseFloat(ruta.latitudOrigen!), 
                        longitude: parseFloat(ruta.longitudOrigen!), 
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                >
                    <Marker 
                        coordinate={{ 
                            latitude: parseFloat(ruta.latitudOrigen!), 
                            longitude: parseFloat(ruta.longitudOrigen!) 
                        }}
                    />
                    <Marker 
                        coordinate={{ 
                            latitude: parseFloat(ruta.latitudDestino!), 
                            longitude: parseFloat(ruta.longitudDestino!) 
                        }}
                    />

                    <MapViewDirections 
                        origin={{
                            latitude: parseFloat(ruta.latitudOrigen!),
                            longitude: parseFloat(ruta.longitudOrigen!)
                        }}
                        destination={{
                            latitude: parseFloat(ruta.latitudDestino!), 
                            longitude: parseFloat(ruta.longitudDestino!)
                        }}
                        apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY || ''}
                        strokeColor='blue'
                        strokeWidth={6}
                    />

                </MapView>

            </View>

            <View style={ localStyles.continerBottons }>
                <BotonTarget 
                    texto='Horarios'
                    iconName='time'
                    width={350}
                    heigth={60}
                    action={() => navigation.navigate('HorariosScreen', ruta)}
                />
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    continerBottons: {
        marginTop: 20, 
        alignItems: 'center',
    },
    containerMap: {
        backgroundColor: 'blue',
        height: 350,
        width: 350,
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
        alignSelf: 'center'
    }
});