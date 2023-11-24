import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { HeaderText } from '../components/HeaderText';
import { Boton } from '../components/Boton';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { StackLoginParams } from '../navigaton/LoginStackNavigation';

interface Props extends StackScreenProps<StackLoginParams, 'LoginScreen'> {};

const { height: heightWindow } = Dimensions.get('window');

export const LoginScreen = ({ navigation }: Props) => {

    return (
        <View style={ styles.container } >
            <HeaderText height={100} />
            <View style={{ ...styles.body, paddingTop: 30 }} >
                
                <Image 
                    source={ require('../../assets/LogoRutaFacil.png') } 
                    style={ localStyles.logo }
                />
                
                <View style={{ marginBottom: 70, marginTop: 30 }} >
                    <Boton 
                        texto='Iniciar sesión' 
                        action={() => navigation.navigate('InicioSecionScreen')}
                    />
                </View>
                <View style={{ marginBottom: 70 }} >
                    <Boton 
                        texto='Crear cuenta'
                        action={() => navigation.navigate('RegistroScreen')} 
                    />
                </View>

            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    logo: {
        height: (heightWindow > 850) ? 330 : 250,
        width:  (heightWindow > 850) ? 330 : 250,
        marginBottom: 40
    },
});

