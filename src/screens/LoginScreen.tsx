import { Image, StyleSheet, View } from 'react-native';
import { HeaderApp } from '../components/HeaderApp';
import { Boton } from '../components/Boton';
import { styles } from '../theme/appTheme';

export const ScreenLogin = () => {

    return (
        <View style={ styles.container } >
            <HeaderApp height={80} />
            <View style={{ ...styles.body, paddingTop: 30 }} >
                
                <Image 
                    source={ require('../../assets/LogoRutaFacil.png') } 
                    style={ localStyles.logo }
                />
                
                <View style={{ marginBottom: 50 }} >
                    <Boton texto='Iniciar sesión' />
                </View>
                <View style={{ marginBottom: 70 }} >
                    <Boton texto='Crear cuenta' />
                </View>

            </View>
            <View style={{ top: 0 }} >
                    <HeaderApp height={130} />
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

