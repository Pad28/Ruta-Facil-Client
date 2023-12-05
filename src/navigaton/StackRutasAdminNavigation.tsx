import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { AdminRutasScreen } from '../screens/AdminRutasScreen';
import { NewRutaScreen } from '../screens/NewRutaScreen';
import { Ruta } from '../interfaces/RutasResponse';

export type StackRutasAdminProps = {
    AdminRutasScreen: undefined;
    NewRutaScreen: Ruta;
}

const Stack = createStackNavigator<StackRutasAdminProps>();
export const StackRutasAdminNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='AdminRutasScreen' component={AdminRutasScreen} />
            <Stack.Screen name='NewRutaScreen' component={NewRutaScreen} />

        </Stack.Navigator>
    );
}
