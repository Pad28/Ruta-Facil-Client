import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegistroScreen } from "../screens/RegistroScreen";
import { colors } from "../theme/appTheme";
import { IinicioSecionScreen } from "../screens/IinicioSecionScreen";
import { DrawerMenu } from "./DrawerMenu";
import { useContext } from "react";
import { AuthContext } from "../context/auhtContext/AuthContext";

export type StackLoginParams = {
    LoginScreen: undefined;
    RegistroScreen: undefined;
    InicioSecionScreen: undefined;
    DrawerHome: undefined;
}

const Stack = createStackNavigator<StackLoginParams>();

export const LoginStackNavigation = () => {
    const { authState } = useContext(AuthContext);

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
            {
                (!authState.isloggedIn)
                    ? (
                        <>
                        <Stack.Screen 
                            name="LoginScreen" 
                            component={LoginScreen}
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen
                            name="RegistroScreen"  
                            component={RegistroScreen} 
                        />
                        <Stack.Screen 
                            name="InicioSecionScreen"
                            component={IinicioSecionScreen}
                            // options={{ headerShown: false }} 
                        />
                        </>
                    ) : (
                        
                        <Stack.Screen 
                            name="DrawerHome"
                            component={DrawerMenu}
                            options={{ 
                                headerShown: false,
                                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid 
                            }} 
                        />
                    )
            }

        </Stack.Navigator>

    );
}
