import { Dimensions, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import { colors } from "../theme/appTheme";

interface Props {
    height: number;
    texto?: string;
}

export const HeaderApp = ( { height, texto = '' }: Props ) => {
    const { width } = Dimensions.get('window');

    return (
        <View style={{ ...localStyles.header, height, width }} >
            <StatusBar backgroundColor={ colors.primario } style="dark" />
            <Text 
                style={{ 
                    ...localStyles.texto, 
                    top: Constants.statusBarHeight
                }}
            > 
            { texto } 
            </Text>
        </View>
    );
}

const localStyles = StyleSheet.create({
    header: {
        backgroundColor: colors.primario,
    },
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 16,
        marginTop: 10
    }
});
