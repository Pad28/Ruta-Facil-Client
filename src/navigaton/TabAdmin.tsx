import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { SugerenciasScreen } from '../screens/SugerenciasScreen';
import { colors } from '../theme/appTheme';
import { TopTabRutasNavigator } from './TopTabRutasNavigator';
import { TabBarPersonalizada } from '../components/TabBarPersonalizada';
import { NotificacionesScreen } from '../screens/NotificacionesScreen';
import { AdminScreen } from '../screens/AdminScreen';
import { AdminReportesScreen } from '../screens/AdminReportesScreen';
import { TopTabAdminNavigation } from './TopTabAdminNavigation';

const Tab = createBottomTabNavigator();
export const TabAdmin = () => {

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
                        case 'TopTabAdminNavigation':
                            iconName = 'home'
                            break;
                        case 'AdminReportesScreen':
                            iconName = 'clipboard'
                            break;
                    }

                    return (
                        <Ionicons name={iconName} color={color} size={40} />
                    )
                }
            })}
            
        >

            <Tab.Screen name='TopTabAdminNavigation' component={TopTabAdminNavigation} options={{ title: 'Inicio' }} />
            <Tab.Screen name='AdminReportesScreen' component={AdminReportesScreen} options={{ title: 'Reportes' }} />
        </Tab.Navigator>
    );
}