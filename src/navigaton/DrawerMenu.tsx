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
    let userName: string, userLastname: string, userId: string;
    if(authState.isloggedIn && authState.userAuthenticated ) {
        const { nombre, apellidos, id } = authState.userAuthenticated.user;
        userName = nombre;
        userLastname = apellidos;
        userId = id;
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
                    userName={`${userName} ${userLastname}`} 
                    userID={ userId }
                />
            )}
        >   
            <Drawer.Screen name='HomeTabNavigator' component={HomeTabNavigator} />
        </Drawer.Navigator>
    );
}


