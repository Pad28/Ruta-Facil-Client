import React, { useContext } from 'react'
import { usePostpeticionAny } from './usePostpeticionAny';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { Alert } from 'react-native';
import { useBusquedas } from './useBusquedas';
import { RutasGuardadasResponse } from '../interfaces/RutasGuardadasResponse';
import { usePeticionDelete } from './usePeticionDelete';

export const useRutasGuardadas = (  ) => {
    const { authState } = useContext(AuthContext);

    const { correo } = 
        (authState.userAuthenticated?.user) 
        ? authState.userAuthenticated?.user 
        : { correo: '' };
    
    const { 
        peticion: peticionSaveRuta 
    } = usePostpeticionAny('/api/rutas-guardadas');

    const { peticion: peticionDelete } = usePeticionDelete();
    
    const { busqueda, isLoading: isLoadingBusquedaRutasGuardadas, setisLoading: setIsLoadingBusquedaRutasGuardadas } = useBusquedas<RutasGuardadasResponse>(
        authState.userAuthenticated?.user.id || '', 
        'RutaGuardada'
    );

    const listarRutasGuardada = async() => {
        const guradadas = await busqueda();
        return guradadas as RutasGuardadasResponse;
    }

    const guardarRuta = (numeroRuta: number) => {
        peticionSaveRuta(
            {
                correo_usuario: correo,
                numero_ruta: numeroRuta
            }, 
            { headers: { 'api-key': authState.userAuthenticated?.token || '' } }
        )
        .catch(err => Alert.alert('Error', err.message));
    }

    const eliminarRutaGuardada = (id: string) => {
        peticionDelete(
            `/api/rutas-guardadas/${id}`, 
            { headers: { 'api-key': authState.userAuthenticated?.token || '' } } 
        )
        .catch(err => Alert.alert('Error', err.message));
    }

    return {
        listarRutasGuardada,
        guardarRuta,
        eliminarRutaGuardada,
        isLoadingBusquedaRutasGuardadas,
        setIsLoadingBusquedaRutasGuardadas,
    };

}
