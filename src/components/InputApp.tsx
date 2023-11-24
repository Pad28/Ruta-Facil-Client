import { Ionicons } from "@expo/vector-icons";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";

interface Props {
    texto: string;
    width?: number;
    password?: boolean;
    iconName?: string;
    action?: (texto: string) => void;
}

const { width: widthWindow, height: heightWindow } = Dimensions.get('window');

export const InputApp = ( { texto, password = false, iconName, width = (widthWindow > 450) ? 350 : 300 , action }: Props ) => {
    return (
        <View 
            style={{ 
                marginTop: ( heightWindow > 850 ) ? 50 : 40, 
                flexDirection: 'row', 
                justifyContent: 'center',
                alignItems: 'center',
            }} 
        >
            <Ionicons 
                style={{ top: 4 }} 
                name={iconName} 
                size={34}
            />
            <TextInput 
                style={{ ...localStyles.input, width }}
                placeholder={ texto }
                secureTextEntry={password}
                onChangeText={action}
            />

        </View>
    );
}

const localStyles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        height: 50,
        fontSize: 20,
        paddingHorizontal: 14
    }
})