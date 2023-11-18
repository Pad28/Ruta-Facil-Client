import { StyleSheet, Text, TextInput, View } from "react-native";
import { HeaderApp } from "../components/HeaderApp";
import { InputApp } from "../components/InputApp";
import { Boton } from "../components/Boton";
import { styles } from "../theme/appTheme";

export const RegistroScreen = () => {
    return (
        <View style={ styles.container } >
            <HeaderApp height={100} texto="Registro" />
            <View style={ styles.body } >

                <View>
                    <InputApp 
                        texto="Nombre(s)" 
                        iconName="man" 
                    />
                </View>
                <View>
                    <InputApp 
                        texto="Apellidos(s)" 
                        iconName="man" 
                    />
                </View>
                <View>
                    <InputApp 
                        texto="Email" 
                        iconName="mail" 
                    />
                </View>
                <View>
                    <InputApp 
                        texto="Teléfono" 
                        iconName="call" 
                    />
                </View>
                <View>
                    <InputApp 
                        texto="Contraseña" 
                        iconName="lock-closed" 
                        password={true} 
                    />
                </View>
                <View>
                    <InputApp 
                        texto="Confirmar contraseña" 
                        iconName="lock-closed" 
                        password={true} 
                    />
                </View>

                <View style={{ marginTop: 60 }} >
                    <Boton texto="Registrar" />
                </View>

            </View>
            <View style={{ top: 0 }} >
                <HeaderApp height={80} />
            </View>
        </View>
    );
}

