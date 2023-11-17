import { Dimensions, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "../theme/appTheme";

interface Props {
    height: number;
}

export const HeaderApp = ( { height }: Props ) => {
    const { width } = Dimensions.get('window');

    return (
        <View style={{ ...localStyles.header, height, width }} >
            <StatusBar backgroundColor={ colors.primario } style="dark" />
        </View>
    );
}

const localStyles = StyleSheet.create({
    header: {
        backgroundColor: colors.primario,
    }
});
