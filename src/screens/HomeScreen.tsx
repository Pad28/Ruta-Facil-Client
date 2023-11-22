import React, { useContext } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {};

export const HomeScreen = ({ navigation }: Props) => {
    const {authState} = useContext(AuthContext);

    return (
        <View style={ styles.containerTabNav } >
            <Text> HomeScreen </Text>
            <Text>
                {
                    JSON.stringify(authState.user, null, 4)
                }
            </Text>
        </View>
    );
}
