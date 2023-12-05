import React, { useContext, useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { useBusquedas } from '../hooks/useBusquedas';
import { RutasResponse } from '../interfaces';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { HorariosResponse } from '../interfaces/HorariosResponse';

export const Test = () => {
    const { logIn } = useContext(AuthContext);

    const { 
        busqueda,
        results,
        termino,
        setTermino
    } = useBusquedas<HorariosResponse>(35, 'Horario');    

    useEffect(() => {
        logIn({
            "user": {
                "id": "ba0120e6-5fbe-42ed-8cb0-0b3963e796b1",
                "correo": "admin@test.com",
                "nombre": "Admin",
                "apellidos": "Apellido",
                "password": "$2a$15$k4pie2wluLYjEBxfMeeV3OYTSyOvnEey/T2VnvRzYOM.VPKvdDwE.",
                "telefono": "7971239199",
                "foto": "default_user.png",
                "estado": true,
                "rol": "ADMIN"
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhMDEyMGU2LTVmYmUtNDJlZC04Y2IwLTBiMzk2M2U3OTZiMSIsImlhdCI6MTcwMTU2NzI2NSwiZXhwIjoxNzAxNTgxNjY1fQ.vji4WVgFbOF5b2gpD--OfRQSOTGfGL3Ynd-mu_7vKdw"
        })
    }, []);

    return (
        <View style={{ marginTop: 50 }} >
            <Text>TestScreen</Text>
            <Button 
                title='press'
                onPress={() => {
                    busqueda();
                }}
            />
            <Text>
                {
                    JSON.stringify(results.horarios, null, 4)
                }
            </Text>
        </View>
    );
}
