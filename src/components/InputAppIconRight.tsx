import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
    texto: string;
    width?: number;
    password?: boolean;
    iconName?: string;
    action?: (text: string) => void;
}

export const InputAppIconRight = ( { texto, password = false, iconName, width = 300, action }: Props ) => {
    return (
        <View 
            style={{
                marginTop: 25, 
                flexDirection: 'row', 
            }}
        >
            <TextInput 
                style={{ ...localStyles.input, width }}
                placeholder={ texto }
                secureTextEntry={password}
                onChangeText={action}
            />
            <Ionicons 
                style={{ top: 4 }} 
                name={iconName} 
                size={34}
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
        paddingHorizontal: 4
    }

})