import { Button, Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { InputApp } from "../components/InputApp";
import { StackScreenProps } from "@react-navigation/stack";
import { StackLoginParams } from "../navigaton/LoginStackNavigation";
import { useHeaderLeftStack } from "../hooks/useHeaderLeftStack";
import { useContext } from "react";
import { AuthContext } from "../context/auhtContext/AuthContext";

interface Props extends StackScreenProps<StackLoginParams, 'InicioSecionScreen'> {};

export const IinicioSecionScreen = ({ navigation }: Props) => {
    const { logIn } = useContext(AuthContext);
    useHeaderLeftStack({ navigation, title: 'Inico de Seción' });

    return (
        <View style={{ marginTop: 20, alignItems: 'center', flex: 1 }} >
            <Text style={styles.tiulo}>Pantalla de inicio de sesion</Text>
            <InputApp texto="correo/telefono" />
            <InputApp texto="password" />
            <View style={{ marginTop: 50 }} >
                <Button 
                    title="Aceptar" 
                    onPress={() => {
                        logIn({ token:'asas', user: { nombre: 'test', apellidos: 'test', correo: 'test', estado: true, foto: '123', id: 'qwe', password: '123', rol: 'USER', telefono: '123' } })       
                    }} 
                />
            </View>
        </View>
    );
}
