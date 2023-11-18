import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { HeaderApp } from '../components/HeaderApp';
import { Boton } from '../components/Boton';

export const ScreenLogin = () => {

    const { height } = Dimensions.get('window');

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

            </View>
            <View style={{ top: 0 }} >
                    <HeaderApp height={130} />
                </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        alignContent: 'space-between'
    },
    logo: {
        height: 250,
        width: 250,
        marginBottom: 40
    },
});

