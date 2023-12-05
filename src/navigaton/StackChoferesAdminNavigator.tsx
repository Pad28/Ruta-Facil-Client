import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { AdminChoferesScreen } from '../screens/AdminChoferesScreen';
import { AgregarChoferesScreen } from '../screens/AgregarChoferesScreen';

export type StackAdminChoferesProps = {
    AdminChoferesScreen: undefined;
    AgregarChoferesScreen: undefined;
}

const Stack = createStackNavigator<StackAdminChoferesProps>();
export const StackChoferesNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen 
                name='AdminChoferesScreen'
                component={AdminChoferesScreen}
            />
            <Stack.Screen 
                name='AgregarChoferesScreen'
                component={AgregarChoferesScreen}
            />
            

        </Stack.Navigator>
    );
}
