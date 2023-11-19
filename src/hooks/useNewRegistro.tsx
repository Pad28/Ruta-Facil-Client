import { useState } from "react";
import { rutaFacilRegistro } from "../api/rutaFacilRestServer";
import { formularioRegistroType } from "../helpers/types/formualrioRegistroType";
import axios from "axios";

export const useNewRegistro = () => {
    const [isLoading, setIsLoading] = useState(false);

    const newRegistro = async(form: formularioRegistroType) => {
        setIsLoading(true);
        const keys = Object.keys(form) as (keyof formularioRegistroType)[];        
        keys.forEach((k) => {
            if(!form[k]) {
                throw new Error ('Completa todos los campos');
            }
        });
    
        if( form.password !== form.confirmPassword ) {
            throw new Error ('Las contraseñas no coincide');
        }
    

        const response = await rutaFacilRegistro.post('/api/usuarios', {
            nombre: form.nombre,
            apellidos: form.apellido,
            correo: form.email,
            password: form.password,
            telefono: form.telefono
        }) .catch(error => {
            
            if(error.response) {
                throw new Error(error.response.data.errors[0].msg);
            }
            if(error.request) {
                throw new Error('Ups... ocurio un error, intentalo mas tarde');
            }
        });
        
        setIsLoading(false);
        return response;
    
    }

    return {
        isLoading,
        setIsLoading,
        newRegistro
    }
}
