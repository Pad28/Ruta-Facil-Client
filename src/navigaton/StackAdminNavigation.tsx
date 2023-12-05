import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { AdministradorScreen } from '../screens/AdministradorScreen';
import { AdminAdScreen } from '../screens/AdminAdScreen';

export type StackAdminProps = {
    AdministradorScreen: undefined;
    AdminAdScreen: undefined;
}

const Stack = createStackNavigator<StackAdminProps>();
export const StackAdminNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen 
                name='AdministradorScreen'
                component={AdministradorScreen}
            />
            <Stack.Screen 
                name='AdminAdScreen'
                component={AdminAdScreen}
            />
            

        </Stack.Navigator>
    );
}
