import { useState } from "react";
import { rutaFacilRegistro } from "../api/rutaFacilRestServer";

export const usePeticionPost = <T extends Object, B extends Object>(path: string, form: T) => {
    const [isLoading, setIsLoading] = useState(false);

    const peticion = async(body: B) => {
        setIsLoading(true);
        const keys = Object.keys(form) as (keyof T)[];        
        keys.forEach((k) => {
            if(!form[k]) {
                throw new Error ('Completa todos los campos');
            }
        });

        const response = await rutaFacilRegistro.post(path, body)
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
        
        setIsLoading(false);
        if(response) {
            return response.data;
        }
        return null;
    
    }

    return {
        isLoading,
        setIsLoading,
        peticion
    }
}
