import { StackNavigationProp } from "@react-navigation/stack";
import { StackLoginParams } from "../navigaton/LoginStackNavigation";
import { useEffect } from "react";
import { HeaderLeftStack } from "../components/HeaderLeftStack";

interface Props {
    navigation: StackNavigationProp<StackLoginParams, any, any>;
    title: string;
}

export const useHeaderLeft = ( { navigation, title }: Props  ) => {
    useEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: () => (
                <HeaderLeftStack 
                    title={ title } 
                    action={ () => navigation.popToTop() } 
                />
            )
        });
    }, []);
}
