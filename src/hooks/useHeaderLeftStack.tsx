import { StackNavigationProp } from "@react-navigation/stack";
import { StackLoginParams } from "../navigaton/LoginStackNavigation";
import { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
