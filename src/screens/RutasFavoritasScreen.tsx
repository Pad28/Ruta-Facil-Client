import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { useBusquedas } from '../hooks/useBusquedas';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { RutaGuardadaResponse } from '../interfaces/RutasGuardadasResponse';
import { ItemRutasList } from '../components/ItemRutasList';
import { useRutasGuardadas } from '../hooks/useRutasGuardadas';
import { Boton } from '../components';
import { BotonTarget } from '../components/BotonTarget';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasFavoritasProps } from '../navigaton/StackFavoritasNavigator';

interface Props extends StackScreenProps<StackRutasFavoritasProps, 'RutasFavoritasScreen'> {}

export const RutasFavoritasScreen = ( { navigation }: Props ) => {
    const { user } = useContext(AuthContext).authState.userAuthenticated! || {};
    const { busqueda, isLoading, results } = useBusquedas<RutaGuardadaResponse>(
        (user) ? user.id : '',
        'RutaGuardada'
    );
    const [refresh, setRefresh] = useState(false);
    const { eliminarRutaGuardada } = useRutasGuardadas();
    
    useEffect(() => {
        busqueda();
    }, [refresh]);

    return (
        <View style={ styles.containerTopTabNav } >
            {
                (isLoading)
                    ? (
                        <ActivityIndicator 
                            size={60} 
                            color={colors.terciario}
                            style={{ marginTop: 180 }} 
                        />
                    ) : (
                        <>
                        <View
                            style={{
                                marginTop: 20,
                                alignItems: 'center'
                            }}
                        >
                            <BotonTarget 
                                texto='Recargar'
                                action={() => setRefresh(!refresh)}
                                iconName='reload'
                                width={340}
                            />
                        </View>
                        <FlatList 
                            style={{ marginTop: 30 }}
                            data={results.rutas}
                            renderItem={({ item }) => (
                                <View
                                    style={ localStyles.containerItemList }
                                >
                                    <ItemRutasList 
                                        marcado={true}
                                        onPressIcon={() => {
                                            eliminarRutaGuardada(item.ruta_fk.id);
                                            setRefresh(!refresh);
                                        }}
                                        onPressRuta={() => {
                                            navigation.navigate('RutaFavoritaScreen', item.ruta_fk)
                                        }}
                                        ruta={item.ruta_fk}
                                        
                                    />
                                </View>
                            )}
                        />
                        </>
                    )
            }

        </View>
    );
}

const localStyles = StyleSheet.create({
    containerItemList: {
        marginVertical: 10, 
        width: 340, 
        alignSelf: 'center'
    }
});