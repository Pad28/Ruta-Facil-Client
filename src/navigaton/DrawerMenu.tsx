import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeTabNavigator } from './HomeTabNavigator';
import { colors } from '../theme/appTheme';
import { HeaderDrawer } from '../components/HeaderDrawer';
import { DrawerMenuIntems } from '../components/DrawerMenuIntems';
import { AuthContext } from '../context/auhtContext/AuthContext';

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
    const { authState } = useContext(AuthContext);
    let userName: string;
    if(authState.isloggedIn && authState.userAuthenticated ) {
        const { nombre  } = authState.userAuthenticated.user;
        userName = nombre;
    }

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
            drawerContent={(props) => (
                <DrawerMenuIntems 
                    drawerProps={props} 
                    userName={`${userName}`} 
                />
            )}
        >   
            <Drawer.Screen name='HomeTabNavigator' component={HomeTabNavigator} />
        </Drawer.Navigator>
    );
}


