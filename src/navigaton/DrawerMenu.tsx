import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeTabNavigator } from './HomeTabNavigator';
import { colors } from '../theme/appTheme';
import { HeaderDrawer } from '../components/HeaderDrawer';
import { LoginStackNavigation } from './LoginStackNavigation';
import { DrawerMenuIntems } from '../components/DrawerMenuIntems';

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                swipeEdgeWidth: 150,
                drawerStyle: {
                    backgroundColor: colors.primario
                },
                header: ({ navigation }) => {
                    return ( <HeaderDrawer toogle={navigation.toggleDrawer}  /> )
                },
                title: '',
            }}
            drawerContent={(props) => <DrawerMenuIntems {...props} />}
        >
            <Drawer.Screen name='HomeTabNavigator' component={HomeTabNavigator} />
            <Drawer.Screen  
                options={{ 
                    headerShown: false,
                    swipeEnabled: false 
                }} 
                name='LoginStackNavigation' 
                component={LoginStackNavigation} 
            />
        </Drawer.Navigator>
    );
}


