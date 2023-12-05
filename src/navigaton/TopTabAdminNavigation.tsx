import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors, widthWindow } from '../theme/appTheme';
import { StackRutasAdminNavigation } from './StackRutasAdminNavigation';
import { StackChoferesNavigator } from './StackChoferesAdminNavigator';
import { StackAdminNavigator } from './StackAdminNavigation';

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
        <Tab.Screen options={{ title: 'Choferes' }} name='StackChoferesNavigator' component={StackChoferesNavigator} />
        <Tab.Screen options={{ title: 'Administrador' }} name='StackAdminNavigator' component={StackAdminNavigator} />
    </Tab.Navigator>
  );
}