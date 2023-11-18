import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../theme/appTheme";

interface Props {
    texto: string;
    width?: number;
    color?: string;
    action?: () => void;
}

export const Boton = ( { texto, width = 250, color = colors.secundario, action }: Props ) => {
    return (
        <TouchableOpacity 
            style={{ 
                ...localStyles.boton, 
                backgroundColor: color,
                width,
            }} 
        >
            <Text style={ localStyles.botonText } > { texto } </Text>
        </TouchableOpacity>   
    );
}

const localStyles = StyleSheet.create({
    boton: {
        paddingVertical: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})