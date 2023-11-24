import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../theme/appTheme";

interface Props {
    texto: string;
    width?: number;
    color?: string;
    action?: () => void;
}

const { width: widthWindow } = Dimensions.get('window');

export const Boton = ( { texto, width = (widthWindow > 450) ? 300 : 250, color = colors.secundario, action }: Props ) => {
    return (
        <TouchableOpacity 
            style={{ 
                ...localStyles.boton, 
                backgroundColor: color,
                width,
            }} 
            onPress={action}
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