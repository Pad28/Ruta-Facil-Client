import { Image, StyleSheet, View } from 'react-native';
import { HeaderApp } from '../components/HeaderApp';
import { Boton } from '../components/Boton';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { StackLoginParams } from '../Navigaton/LoginStackNavigation';

interface Props extends StackScreenProps<StackLoginParams, 'LoginScreen'> {};

export const LoginScreen = ({ navigation }: Props) => {

    return (
        <View style={ styles.container } >
            <HeaderApp height={100} />
            <View style={{ ...styles.body, paddingTop: 30 }} >
                
                <Image 
                    source={ require('../../assets/LogoRutaFacil.png') } 
                    style={ localStyles.logo }
                />
                
                <View style={{ marginBottom: 70, marginTop: 30 }} >
                    <Boton texto='Iniciar sesión' />
                </View>
                <View style={{ marginBottom: 70 }} >
                    <Boton 
                        texto='Crear cuenta'
                        action={() => navigation.navigate('RegistroScreen')} 
                    />
                </View>

            </View>
            <View style={{ top: 0 }} >
                {/* <HeaderApp height={130} /> */}
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    logo: {
        height: 250,
        width: 250,
        marginBottom: 40
    },
});

