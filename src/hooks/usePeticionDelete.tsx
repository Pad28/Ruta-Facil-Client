import { AxiosRequestConfig } from 'axios';
import React, { useState } from 'react'
import { rutaFacilRegistro } from '../api/rutaFacilRestServer';

export const usePeticionDelete = () => {
    const [isLoading, setIsLoading] = useState(false);

    const peticion = async(path: string, config: AxiosRequestConfig) => {
        setIsLoading(true);

        const response = await rutaFacilRegistro.delete(path, config)
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
        setIsLoading
    }

}
