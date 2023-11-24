import React, { useContext } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Dimensions, Text, View } from 'react-native';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { styles } from '../theme/appTheme';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props extends DrawerScreenProps<any, any> {};
const { width, height } = Dimensions.get('window');

export const HomeScreen = ({ navigation }: Props) => {
    const {authState} = useContext(AuthContext);

    return (
        <View style={ styles.containerTabNav } >
            <Text> HomeScreen </Text>
            <Text>
                {
                    JSON.stringify(authState.userAuthenticated, null, 8)
                }
            </Text>
            <Text>
                ancho: { width }, alto: { height }
            </Text>
            <Button
                title='Storage'
                onPress={async() => {
                    AsyncStorage.getItem('userAuthenticated')
                        .then(user => {
                            console.log(user);  
                        })
                    const foto = await AsyncStorage.getItem('userImage');
                    console.log(foto);
                    
                }}
            />
        </View>
    );
}
