import { AxiosRequestConfig } from 'axios';
import React, { useState } from 'react'
import { rutaFacilRegistro } from '../api/rutaFacilRestServer';

export const usePeticionGet = (path: string, config?: AxiosRequestConfig) => {
    const [ isLoading, setisLoading ] = useState(false);

    const peticion = async(pathAux?: string) => {
        setisLoading(true);

        const response = await rutaFacilRegistro.get((pathAux) ? pathAux : path, (config) && config)
            .catch(error => {
                if(error.response) {
                    if(error.response.data.msg) {
                        throw new Error(error.response.data.msg);
                        
                    }
                    throw new Error(error.response.data.errors[0].msg);                    
                }
                if(error.request) {
                    throw new Error('Ups... ocurio un error, intentalo mas tarde');
                }
            });
        return response!.data;
    }

    return {
        peticion,
        isLoading,
        setisLoading
    }
}
