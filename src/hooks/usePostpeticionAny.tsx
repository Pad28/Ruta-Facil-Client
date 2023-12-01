import { Axios, AxiosRequestConfig } from 'axios';
import React, { useState } from 'react'
import { rutaFacilRegistro } from '../api/rutaFacilRestServer';

export const usePostpeticionAny = (path: string) => {
    const [isLoading, setIsLoading] = useState(false);

    const peticion = async(body: Object, config: AxiosRequestConfig) => {
        setIsLoading(true);

        const response = await rutaFacilRegistro.post(path, body, config)
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
