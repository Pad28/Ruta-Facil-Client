import { Image, StyleSheet, View } from 'react-native';
import { HeaderApp } from '../components/HeaderApp';
import { Boton } from '../components/Boton';

export const ScreenLogin = () => {

    return (
        <View style={ localStyles.container } >
            <HeaderApp height={80} />
            <View style={ localStyles.body } >
                
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

                <View>
                    <HeaderApp height={130} />
                </View>
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    logo: {
        height: 250,
        width: 250,
        marginBottom: 40
    },
});

