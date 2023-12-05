import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors, widthWindow } from '../theme/appTheme';
import { AdminRutasScreen } from '../screens/AdminRutasScreen';
import { AdminChoferesScreen } from '../screens/AdminChoferesScreen';
import { AdminAdScreen } from '../screens/AdminAdScreen';
import { StackRutasAdminNavigation } from './StackRutasAdminNavigation';

const Tab = createMaterialTopTabNavigator();

export const TopTabAdminNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={ () => ({
            tabBarStyle: {
                backgroundColor: colors.terciario,
                width: widthWindow - 20,
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 8,
                overflow: 'hidden'
            },
            tabBarLabelStyle: {
                fontWeight: 'bold',
                color: colors.fondo,
                fontSize: 12
            },
            tabBarIndicatorStyle: {
                backgroundColor: 'white',
                height: 4,
                alignSelf: 'center',
            },
            // swipeEnabled: false
        })}
    >
        <Tab.Screen options={{ title: 'Rutas' }} name='StackRutasAdminNavigation' component={StackRutasAdminNavigation} />
        <Tab.Screen options={{ title: 'Choferes' }} name='AdminChoferesScreen' component={AdminChoferesScreen} />
        <Tab.Screen options={{ title: 'Administrador' }} name='AdminAdScreen' component={AdminAdScreen} />
    </Tab.Navigator>
  );
}