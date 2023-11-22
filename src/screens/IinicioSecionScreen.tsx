import { useContext } from "react";
import { ActivityIndicator, Alert, Keyboard, StyleSheet, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StackLoginParams } from "../navigaton/LoginStackNavigation";
import { AuthContext } from "../context/auhtContext/AuthContext";
import { Ionicons } from "@expo/vector-icons";

import { colors, styles } from "../theme/appTheme";
import { UserAuthenticatedInterface, formularioAutenticacionType } from "../interfaces";
import { Boton, InputApp, PasswordInput } from "../components";
import { useForm, useHeaderLeftStack, usePeticionPost } from "../hooks";

interface Props extends StackScreenProps<StackLoginParams, 'InicioSecionScreen'> {};

export const IinicioSecionScreen = ({ navigation }: Props) => {
    useHeaderLeftStack({ navigation, title: 'Inico de Seción' });
    const { logIn } = useContext(AuthContext);
    const { form, onChange } = useForm({} as formularioAutenticacionType);
    const { 
        isLoading, 
        peticion, 
        setIsLoading 
    } = usePeticionPost<formularioAutenticacionType, formularioAutenticacionType>('/api/auth/users/login', form);

    return (
        <View style={ [localStyles.container, { justifyContent: 'center' }] } >
            {
                (!isLoading)
                    ? (
                        <>
                        <Ionicons 
                            name="person-circle"
                            size={220}
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

                            <View style={{ marginTop: 28 }} >
                                <PasswordInput 
                                    texto="Contraseña"
                                    action={(texto) => onChange(texto, 'password')}
                                />
                            </View>

                            <View style={{ marginTop: 80 }} >
                                <Boton texto="Ingresar" 
                                    action={() => {
                                        Keyboard.dismiss();
                                        peticion(form)
                                            .then(resp => {
                                                logIn(resp as UserAuthenticatedInterface);
                                            })
                                            .catch(err => {
                                                Alert.alert('Error', err.message);
                                                setIsLoading(false);
                                            })
                                    }}
                                />
                            </View>
                        </View>
                        </>
                    ) : (
                        <ActivityIndicator
                            color={colors.terciario}
                            size={80}
                        />
                    )
            }
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: { marginTop: 20, alignItems: 'center', flex: 1 }
})