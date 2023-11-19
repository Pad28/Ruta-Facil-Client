import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
    texto: string;
    width?: number;
    password?: boolean;
    iconName?: string;
    action?: (texto: string) => void;
}

export const InputApp = ( { texto, password = false, iconName, width = 300, action }: Props ) => {
    return (
        <View 
            style={{ 
                marginTop: 30, 
                flexDirection: 'row', 
                justifyContent: 'center' 
            }} 
        >
            <Ionicons 
                style={{ top: 18 }} 
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