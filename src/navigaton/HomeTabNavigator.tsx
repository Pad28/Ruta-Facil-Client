import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from '../screens/HomeScreen';
import { SugerenciasScreen } from '../screens/SugerenciasScreen';
import { colors } from '../theme/appTheme';
import { TopTabRutasNavigator } from './TopTabRutasNavigator';
import { TabBarPersonalizada } from '../components/TabBarPersonalizada';

export type HomeTabParams = {
    HomeScreen: undefined;
    TopTabRutasNavigator: undefined;
    SugerenciasScreen: undefined;
}

const Tab = createBottomTabNavigator<HomeTabParams>();
export const HomeTabNavigator = () => {

    return (
        <Tab.Navigator
            tabBar={({ insets, descriptors, navigation, state }) => (
                <TabBarPersonalizada  
                    insets={insets}
                    descriptors={descriptors}
                    navigation={navigation}
                    state={state}
                    activeTintColor='black'
                    inactiveTintColor='gray'

                    activeBackgroundColor={ colors.terciario }
                />
            )}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    let iconName = '';
                    switch (route.name) {
                        case 'HomeScreen':
                            iconName = 'map'
                            break;
                        case 'TopTabRutasNavigator':
                            iconName = 'bus'
                            break;
                        case 'SugerenciasScreen':
                            iconName = 'clipboard'
                            break;
                    }

                    return (
                        <Ionicons name={iconName} color={color} size={40} />
                    )
                }
            })}
            
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Mapa' }} />
            <Tab.Screen name='TopTabRutasNavigator' component={TopTabRutasNavigator} options={{ title: 'Rutas' }} />
            <Tab.Screen name='SugerenciasScreen' component={SugerenciasScreen} options={{ title: 'Sugerencias' }} />
        </Tab.Navigator>
    );
}