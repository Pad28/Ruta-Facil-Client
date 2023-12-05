import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { RutasScreen } from '../screens/RutasScreen';
import { RutaDetailScreen } from '../screens/RutaDetailScreen';
import { Ruta } from '../interfaces/RutasResponse';
import { HorariosScreen } from '../screens/HorariosScreen';
import { Horario } from '../interfaces/HorariosResponse';

export type StackRutasParams = {
    RutasScreen: undefined;
    RutaDetailScreen: Ruta;
    HorariosScreen: Ruta;
};

const Stack = createStackNavigator<StackRutasParams>();
export const StackRutasNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='RutasScreen'
                component={RutasScreen} 
            />
            <Stack.Screen 
                name='RutaDetailScreen'
                component={RutaDetailScreen}
            />
            <Stack.Screen 
                name='HorariosScreen'
                component={HorariosScreen}
            />
        </Stack.Navigator>
    );
}

