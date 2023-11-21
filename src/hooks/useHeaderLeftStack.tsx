import { StackNavigationProp } from "@react-navigation/stack";
import { StackLoginParams } from "../navigaton/LoginStackNavigation";
import { useEffect } from "react";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/appTheme";

interface Props {
    navigation: StackNavigationProp<StackLoginParams, any, any>;
    title: string;
}

export const useHeaderLeftStack = ( { navigation, title }: Props  ) => {
    
    const HeaderComponent = ({ title, action }: { title: string, action: () => void }) => {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                    alignItems: 'center'
                }}
                onPress={action}
                >
                <StatusBar backgroundColor={colors.primario} />
                <Ionicons name='chevron-back' size={32}  />
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >
                    { title }
                </Text>
            </TouchableOpacity>
        );
    }
    
    useEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: () => (
                <HeaderComponent 
                    title={ title } 
                    action={ () => navigation.pop() } 
                />
            )
        });
    }, []);
}
