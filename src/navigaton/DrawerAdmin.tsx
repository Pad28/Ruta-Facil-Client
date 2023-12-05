import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../theme/appTheme';
import { HeaderDrawer } from '../components/HeaderDrawer';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { AdminScreen } from '../screens/AdminScreen';
import { ConfiguracionScreen } from '../screens/ConfiguracionScreen';
import { DrawerMenuIntemsAdmin } from '../components/DrawerMenuIntemsAdmin';
import { TabAdmin } from './TabAdmin';

export type DrawerAdminProps = {
    TabAdmin: undefined;
    ConfiguracionScreen: undefined;
} 

const Drawer = createDrawerNavigator<DrawerAdminProps>();
export const DrawerAdmin = () => {
    const { authState } = useContext(AuthContext);
    let userName: string;
    if(authState.isloggedIn && authState.userAuthenticated ) {
        const { nombre  } = authState.userAuthenticated.user;
        userName = nombre;
    }

    return (
        <Drawer.Navigator
            screenOptions={{
                swipeEdgeWidth: 100,
                drawerStyle: {
                    backgroundColor: colors.primario
                },
                header: ({ navigation }) => {
                    return ( <HeaderDrawer toogle={navigation.toggleDrawer}  /> )
                },
                title: '',
            }}
            drawerContent={(props) => (
                <DrawerMenuIntemsAdmin 
                    drawerProps={props} 
                    userName={`${userName}`} 
                />
            )}
        >   
            <Drawer.Screen name='TabAdmin' component={TabAdmin} />
            <Drawer.Screen name='ConfiguracionScreen' component={ConfiguracionScreen} />
        </Drawer.Navigator>
    );
}


