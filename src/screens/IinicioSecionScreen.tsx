import { Button, Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { InputApp } from "../components/InputApp";
import { useContenedorDeslizable } from "../hooks/useContenedorDeslizable";
import { StackScreenProps } from "@react-navigation/stack";
import { StackLoginParams } from "../navigaton/LoginStackNavigation";
import { HeaderAppBotton } from "../components/HeaderAppBotton";

interface Props extends StackScreenProps<StackLoginParams, 'InicioSecionScreen'> {};

export const IinicioSecionScreen = ({ navigation }: Props) => {

    const { AnimatedContainer, deploy, disguise } = useContenedorDeslizable('translateY', 1000);

    return (
        <View style={{ marginTop: 20, alignItems: 'center', flex: 1 }} >
            <HeaderAppBotton title="Inicio" navigation={navigation} style={{ height: 58 }} />
            <Text style={styles.tiulo}>Pantalla de inicio de sesion</Text>
            <InputApp texto="correo/telefono" />
            <InputApp texto="password" />
            <View style={{ marginTop: 50 }} >
                <Button 
                    title="Aceptar" 
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [ { name: 'DrawerHome' } ]
                        })
                    }} 
                />
            </View>
        </View>
    );
}
