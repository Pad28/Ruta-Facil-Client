import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RutasScreen } from '../screens/RutasScreen';
import { RutasFavoritasScreen } from '../screens/RutasFavoritasScreen';
import { colors, widthWindow } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabRutasNavigator = () => {
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
                fontSize: 14
            },
            tabBarIndicatorStyle: {
                backgroundColor: 'white',
                height: 4,
                alignSelf: 'center',
            },
        })}
    >
        <Tab.Screen options={{ title: 'Rutas' }} name='RutasScreen' component={RutasScreen} />
        <Tab.Screen options={{ title: 'Favoritas' }} name='RutasFavoritasScreen' component={RutasFavoritasScreen} />
    </Tab.Navigator>
  );
}