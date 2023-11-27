import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native';
import { AuthContext } from '../context/auhtContext/AuthContext';
import { styles } from '../theme/appTheme';

import { InputApp } from '../components';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

interface Props extends BottomTabScreenProps<any, any> {};
export const HomeScreen = ({ navigation, route }: Props) => {
    const {authState} = useContext(AuthContext);

    return (
        <View style={ styles.containerTabNav } >
            <Text> HomeScreen </Text>
            <Text>
                {
                    JSON.stringify(authState.userAuthenticated, null, 8)
                }
            </Text>
            
            <InputApp texto='Test' />

        </View>
    );
}
