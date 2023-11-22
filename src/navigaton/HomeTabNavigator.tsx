import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { RutasScreen } from '../screens/RutasScreen';
import { SugerenciasScreen } from '../screens/SugerenciasScreen';
import { colors } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const Tab = createBottomTabNavigator();

export const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.primario,
                    // elevation: 0,
                    height: 90,
                    width: 360 ,
                    marginBottom: 10,
                    alignSelf: 'center',
                    borderRadius: 25
                },
                tabBarLabelStyle: {
                    fontSize: 18,
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
                        <View style={localStyles.iconContainer} >
                            <Ionicons name={iconName} color={color} size={34} />
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

const localStyles = StyleSheet.create({
    iconContainer: {
        marginTop: 10,
        width: 52,
        height: 52,
        backgroundColor: colors.terciario,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }
});