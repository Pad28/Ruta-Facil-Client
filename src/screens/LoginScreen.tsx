import { ActivityIndicator, Dimensions, Image, StyleSheet, View } from 'react-native';
import { HeaderText } from '../components/HeaderText';
import { Boton } from '../components/Boton';
import { colors, styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { StackLoginParams } from '../navigaton/LoginStackNavigation';
import { useContext } from 'react';
import { AuthContext } from '../context/auhtContext/AuthContext';

interface Props extends StackScreenProps<StackLoginParams, 'LoginScreen'> {};

const { height: heightWindow } = Dimensions.get('window');

export const LoginScreen = ({ navigation }: Props) => {
    const { isLoadingUser } = useContext(AuthContext);

    return (
        <>
        {
            (!isLoadingUser)
                ? (
                    <View style={{ flex: 1 }} >
                        <HeaderText height={80} />
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                            <ActivityIndicator  size={80} color={ colors.terciario } />
                        </View>
                    </View>
                ) : (
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
                )
        }
        
        </>
    );
}

const localStyles = StyleSheet.create({
    logo: {
        marginTop: 10,
        // height: (heightWindow > 850) ? 330 : 250,
        // width:  (heightWindow > 850) ? 600 : 400,
        height: 300,
        width: 300,
        // marginBottom: 20,
    },
});

