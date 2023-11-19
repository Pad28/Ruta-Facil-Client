import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegistroScreen } from "../screens/RegistroScreen";
import { colors } from "../theme/appTheme";

export type StackLoginParams = {
    LoginScreen: undefined;
    RegistroScreen: undefined;
}

const Stack = createStackNavigator<StackLoginParams>();

export const LoginStackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: "transparent",
                    backgroundColor: colors.primario,
                },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen 
                options={{ headerShown: false }} 
                name="LoginScreen" 
                component={LoginScreen} 
            />
            <Stack.Screen
                name="RegistroScreen"  
                component={RegistroScreen} 
            />

        </Stack.Navigator>

    );
}
