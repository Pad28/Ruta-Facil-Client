import { useContext } from "react";
import { ActivityIndicator, Alert, Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StackLoginParams } from "../navigaton/LoginStackNavigation";
import { AuthContext } from "../context/auhtContext/AuthContext";
import { Ionicons } from "@expo/vector-icons";

import { colors, styles } from "../theme/appTheme";
import { UserAuthenticatedInterface, formularioAutenticacionType } from "../interfaces";
import { Boton, InputApp, PasswordInput } from "../components";
import { useForm, useHeaderLeftStack, usePeticionPost } from "../hooks";
import { ScrollView } from "react-native-gesture-handler";

interface Props extends StackScreenProps<StackLoginParams, 'InicioSecionScreen'> {};

export const IinicioSecionScreen = ({ navigation }: Props) => {
    const { authState } = useContext(AuthContext);
    useHeaderLeftStack({ navigation, title: 'Inicio de sesión' });
    const { logIn } = useContext(AuthContext);
    const { form, onChange } = useForm({} as formularioAutenticacionType);
    const { 
        isLoading, 
        peticion, 
        setIsLoading 
    } = usePeticionPost<formularioAutenticacionType, formularioAutenticacionType>('/api/auth/users/login', form);

    const { height: heightWindow } = Dimensions.get('window');
    return (
        <>
            {
                (isLoading) 
                    ? (
                        <View
                            style={ localStyles.container }
                        >
                            <ActivityIndicator
                                color={colors.terciario}
                                size={80}
                            />
                        </View>
                    ) : (
                        <ScrollView style={{ flex: 1 }} >
                            <KeyboardAvoidingView
                                style={ localStyles.container }
                            >
                                <Ionicons 
                                    name="person-circle"
                                    size={ (heightWindow > 850) ? 300 : 220 }
                                    style={{ marginLeft: 22 }}
                                />

                                <View style={ styles.body } >

                                    <View>
                                        <InputApp
                                            texto="Email / Teléfono" 
                                            iconName="person"
                                            action={(texto) => onChange(texto, 'usuario')}
                                        />
                                    </View>

                                    <View style={{ marginTop: 40 }} >
                                        <PasswordInput 
                                            texto="Contraseña"
                                            action={(texto) => onChange(texto, 'password')}
                                        />
                                    </View>

                                    <View style={{ marginTop: 100 }} >
                                        <Boton
                                            texto="Ingresar" 
                                            action={() => {
                                                Keyboard.dismiss();
                                                peticion(form)
                                                    .then((resp) => {
                                                        logIn(resp as UserAuthenticatedInterface);
                                                    })
                                                    .catch(err => {
                                                        setIsLoading(false);
                                                        Alert.alert('Error', err.message);
                                                    })
                                            }}
                                        />
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    )
            }
        </>
    );
}

const localStyles = StyleSheet.create({
    container: { marginTop: 20, alignItems: 'center', flex: 1, justifyContent: 'center' }
})
