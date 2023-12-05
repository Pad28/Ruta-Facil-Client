import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/auhtContext/AuthContext';
import { usePeticionGet } from './usePeticionGet';
import { Alert } from 'react-native';

export const useBusquedas = <T extends Object>(terminoInit: string | number, modelo: string) => {
    const { authState } = useContext(AuthContext);
    const [ results, setResults ] = useState({} as T);
    const { peticion, isLoading, setisLoading } = usePeticionGet(
        ``, 
        { headers: { 'api-key': authState.userAuthenticated?.token || '' } }
    );
    const [ termino, setTermino ] = useState(terminoInit);
    
    const busqueda = async() => {
        const res = await peticion(`/api/busquedas/${modelo}/${termino}`)
        .then(res => {
            setisLoading(false);
            setResults(res as T);
            return res;
        })
        .catch(err => {
            setisLoading(false);
            Alert.alert('Error', err.message);
        });

        return res;
    }

    return {
        results,
        setResults,
        busqueda,
        isLoading,
        setisLoading,
        termino,
        setTermino
    }

}
