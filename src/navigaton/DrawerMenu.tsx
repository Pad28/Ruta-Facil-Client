import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeTabNavigator } from './HomeTabNavigator';
import { colors } from '../theme/appTheme';
import { HeaderDrawer } from '../components/HeaderDrawer';
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
            drawerContent={(props) => <DrawerMenuIntems drawerProps={props} userName='User' />}
        >   
            <Drawer.Screen name='HomeTabNavigator' component={HomeTabNavigator} />
        </Drawer.Navigator>
    );
}


