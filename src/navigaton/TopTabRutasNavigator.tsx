import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RutasFavoritasScreen } from '../screens/RutasFavoritasScreen';
import { colors, widthWindow } from '../theme/appTheme';
import { StackRutasNavigator } from './StackRutasNavigator';
import { StackFavoritasNavigator } from './StackFavoritasNavigator';

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
            // swipeEnabled: false
        })}
    >
        <Tab.Screen options={{ title: 'Rutas' }} name='StackRutasNavigator' component={StackRutasNavigator} />
        <Tab.Screen options={{ title: 'Favoritas' }} name='StackFavoritasNavigator' component={StackFavoritasNavigator} />
    </Tab.Navigator>
  );
}