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
    // const { width: widthWindow, height: heightWindow } = Dimensions.get('window')

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
                tabBarHideOnKeyboard: true,
                // tabBarStyle: {
                //     backgroundColor: colors.primario,
                //     // elevation: 0,
                //     height: 90,
                //     width:  widthWindow - 30,
                //     marginBottom: 16,
                //     alignSelf: 'center',
                //     borderRadius: 25
                // },
                // tabBarLabelStyle: {
                //     fontSize: (widthWindow > 450) ? 10 : 18, 
                //     marginBottom: 10,
                // },
                // tabBarActiveTintColor: 'white',
                // tabBarInactiveTintColor: 'black',
                tabBarIcon: ({ color }) => {
                    let iconName = '';
                    switch (route.name) {
                        case 'HomeScreen':
                            iconName = 'home'
                            break;
                        case 'TopTabRutasNavigator':
                            iconName = 'bus'
                            break;
                        case 'SugerenciasScreen':
                            iconName = 'clipboard'
                            break;
                    }

                    return (
                        // <View style={localStyles.iconContainer} >
                            <Ionicons name={iconName} color={color} size={40} />
                        // </View>
                    )
                }
            })}
            
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Inicio' }} />
            <Tab.Screen name='TopTabRutasNavigator' component={TopTabRutasNavigator} options={{ title: 'Rutas' }} />
            <Tab.Screen name='SugerenciasScreen' component={SugerenciasScreen} options={{ title: 'Sugerencias' }} />
        </Tab.Navigator>
    );
}

// const localStyles = StyleSheet.create({
//     iconContainer: {
//         // marginTop: 10,
//         width: 54,
//         height: 54,
//         backgroundColor: colors.terciario,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 30
//     }
// });