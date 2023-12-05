import { DrawerScreenProps } from '@react-navigation/drawer';
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native'

import { DrawerNavigationParams } from '../navigaton/DrawerMenu';
import { styles, widthWindow, colors} from '../theme/appTheme';
import { BotonTarget } from '../components/BotonTarget';
import { useContext, useEffect, useState } from 'react';
import { useBusquedas } from '../hooks/useBusquedas';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { NotificacionesResponse } from '../interfaces/NotificaionesResponse';
import { ItemBotonIconRight } from '../components/ItemBotonIconRight';
import { usePeticionDelete } from '../hooks/usePeticionDelete';

interface Props extends DrawerScreenProps<DrawerNavigationParams, 'NotificacionesScreen'> {}
export const NotificacionesScreen = ( { navigation }: Props ) => {
    const [refresh, setRefresh] = useState(false);
    const { 
        isLoading: isLoadingDelete, 
        setIsLoading: setIsLoadingDelete, 
        peticion: peticionDelete
    } = usePeticionDelete();
    const { user } = useContext(AuthContext).authState.userAuthenticated! || {};
    const { userAuthenticated }  = useContext(AuthContext).authState;
    const { busqueda, isLoading, results } = useBusquedas<NotificacionesResponse>(
        (user) ? user.id : 'default',
        'Notificacion'
    );

    useEffect(() => {
        busqueda();
    }, [refresh])

    return (
        <View>
            <View style={ localStyles.headerContainer } >
                <Text style={ localStyles.headerText } >Notificaiones</Text>
            </View>
            <View style={[ styles.containerTopTabNav, localStyles.container ]} >
                <BotonTarget 
                    texto='Recargar'
                    iconName='reload'
                    width={340}
                    action={() => setRefresh(!refresh)}
                />

                {
                    (isLoading || isLoadingDelete)
                    ? <ActivityIndicator style={{marginTop: 180}} size={60} color={colors.terciario} />
                    : (
                        <FlatList
                            style={{ flex: 1, marginTop: 40 }}
                            data={results.notificaiones}
                            renderItem={({ item }) => (
                                <ItemBotonIconRight 
                                    iconName='trash'
                                    colorIcon='red'
                                    onPress={() => {
                                        setIsLoadingDelete(true);
                                        setRefresh(!refresh);
                                        peticionDelete(
                                            `/api/notificaciones/recordatorio/${item.id}`, 
                                            { headers: { 'api-key': userAuthenticated?.token || '' } }
                                        ).then(res => {
                                            setIsLoadingDelete(false);
                                        }).catch(err => {
                                            setIsLoadingDelete(false);
                                            Alert.alert('Error', err.message);                                          
                                        });
                                    }}
                                    title={`${item.fk_ruta.origen}-${item.fk_ruta.destino} ${item.hora}:${item.minuto}`}
                                    value={item}
                                />
                            )}
                        />
                    )
                }
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 30
    },
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

});
