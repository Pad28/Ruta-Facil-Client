import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { RutasScreen } from '../screens/RutasScreen';
import { SugerenciasScreen } from '../screens/SugerenciasScreen';
import { colors } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.primario,
                    elevation: 0,
                    height: 106,
                },
                tabBarLabelStyle: {
                    fontSize: 20,
                    marginBottom: 10
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarIcon: ({ color }) => {
                    let iconName = '';
                    switch (route.name) {
                        case 'HomeScreen':
                            iconName = 'home'
                            break;
                        case 'RutasScreen':
                            iconName = 'bus'
                            break;
                        case 'SugerenciasScreen':
                            iconName = 'clipboard'
                            break;
                    
                        default:
                            iconName: 'code';
                            break;
                    }

                    return (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center', 
                            backgroundColor: colors.terciario, 
                            borderRadius: 26,
                            height: 60,
                            width: 60 
                            }} 
                        >
                            <Ionicons name={iconName} color={color} size={40} />
                        </View>
                    )
                } 
            })}
            
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Inico' }} />
            <Tab.Screen name='RutasScreen' component={RutasScreen} options={{ title: 'Rutas' }} />
            <Tab.Screen name='SugerenciasScreen' component={SugerenciasScreen} options={{ title: 'Sugerencias' }} />
        </Tab.Navigator>
    );
}
