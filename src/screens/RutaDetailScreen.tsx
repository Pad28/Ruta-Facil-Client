import React, { useContext} from 'react'
import { StyleSheet, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasParams } from '../navigaton/StackRutasNavigator';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { BotonTarget } from '../components/BotonTarget';
import MapView from 'react-native-maps';

interface Props extends StackScreenProps<StackRutasParams, 'RutaDetailScreen'> {}

export const RutaDetailScreen = ( { navigation, route }: Props ) => {
    const { authState } = useContext(AuthContext);
    const { destino, origen, id, estado, numero } = route.params;

    return (
        <View
            style={[
                styles.containerTopTabNav
            ]}
        >
            <HeaderRutaDetail 
                title={`${origen} - ${destino}`}
                onPressNavigate={navigation.pop}
            />
            <View 
                style={{
                    backgroundColor: 'blue',
                    height: 350,
                    marginTop: 10,
                    borderRadius: 10,
                    overflow: 'hidden'
                }}
            >
                <MapView 
                    style={{ height: '100%', width:'100%' }}
                    initialRegion={{
                        latitude: 20.1351,
                        longitude: -98.3792,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                />

            </View>

            <View style={ localStyles.continerBottons }>
                <BotonTarget 
                    texto='Horarios'
                    iconName='time'
                    width={350}
                    heigth={60}
                    action={() => navigation.navigate('HorariosScreen', { id, estado, numero, destino, origen })}
                />
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    continerBottons: {
        marginTop: 20, 
        alignItems: 'center',
    }
});