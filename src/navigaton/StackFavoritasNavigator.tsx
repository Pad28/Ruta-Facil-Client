import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { RutasFavoritasScreen } from '../screens/RutasFavoritasScreen';
import { RutaFavoritaScreen } from '../screens/RutaFavoritaScreen';
import { Ruta } from '../interfaces/RutasResponse';

export type StackRutasFavoritasProps = {
    RutasFavoritasScreen: undefined;
    RutaFavoritaScreen: Ruta;
}

const Stack = createStackNavigator<StackRutasFavoritasProps>();
export const StackFavoritasNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='RutasFavoritasScreen' component={RutasFavoritasScreen} />
            <Stack.Screen name='RutaFavoritaScreen' component={RutaFavoritaScreen} />
        </Stack.Navigator>
    );
}
