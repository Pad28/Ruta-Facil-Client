import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

import { colors, styles } from '../theme/appTheme';
import { InputBotonRight } from '../components';
import { ItemRutasList } from '../components/ItemRutasList';
import { RutasResponse } from '../interfaces/RutasResponse';
import { FlatList } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasParams } from '../navigaton/StackRutasNavigator';
import { useBusquedas } from '../hooks/useBusquedas';
import { useRutasGuardadas } from '../hooks/useRutasGuardadas';
import { RutaGuardadaResponse } from '../interfaces/RutasGuardadasResponse';

interface Props extends StackScreenProps<StackRutasParams, 'RutasScreen'> {};

export const RutasScreen = ( { navigation }: Props ) => {
    const { 
        busqueda, 
        isLoading, 
        results, 
        setTermino, 
        termino 
    } = useBusquedas<RutasResponse>('*', 'Ruta');
    
    const { 
        listarRutasGuardada,
        eliminarRutaGuardada, 
        guardarRuta,
    } = useRutasGuardadas();
    
    const [ guardadas, setGuardadas ] = useState<string[]>();
    const [ refresh, setRefresh ] = useState(false);

    useEffect(() => {
        listarRutasGuardada()
            .then((res) => {
                setGuardadas(
                    (res as RutaGuardadaResponse).rutas.map(ruta => {
                        return ruta.id_ruta
                    })
                );
                busqueda();
            })
    }, [termino, refresh]);

    return (
        <View style={[ 
                styles.containerTopTabNav, 
                { alignItems: 'center' } 
            ]}
        >
            <View
                style={{ marginTop: 12 }}
            >
                <InputBotonRight 
                    action={(termino) => {
                        setTermino('*');
                        setRefresh(!refresh);
                    }}
                    iconName='reload'
                    placeHolder='Buscar'
                    colorBoton={ colors.terciario }
                    onCahgeText={(text) => {
                        (text === '' || !text) ? setTermino('*') : setTermino(text);
                    }}
                />
                {
                    (isLoading)
                        ? (
                            <View style={{ alignSelf: 'center', marginTop: 180 }} >
                                <ActivityIndicator color={colors.terciario} size={80} />
                            </View>
                        ) : (
                            <>
                                <View
                                    style={{ flex: 1, marginTop: 6 }}
                                >
                                 <FlatList 
                                    scrollEnabled
                                    data={results.rutas}
                                    renderItem={({ item }) => (
                                        <View
                                            style={ localStyles.containerItemRuta }
                                        >   
                                            <ItemRutasList
                                                marcado={ (guardadas?.includes(item.id)) ? true : false }
                                                ruta={item}
                                                onPressIcon={(fav) => {
                                                    if(fav) {
                                                        eliminarRutaGuardada(item.id);
                                                    } else {
                                                        guardarRuta(item.numero);
                                                    }
                                                }}
                                                onPressRuta={() => {
                                                    navigation.navigate('RutaDetailScreen', item);
                                                }} 
                                            />
                                        </View>
                                    )}
                                 />   
                                </View>
                            </>
                        )
                }
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    containerItemRuta: {
        marginVertical: 10
    }
});