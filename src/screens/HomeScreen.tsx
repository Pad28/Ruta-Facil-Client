import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/auhtContext/AuthContext';

interface Props extends DrawerScreenProps<any, any> {};

export const HomeScreen = ({ navigation }: Props) => {
     const { logOut } = useContext(AuthContext);

    return (
        <View style={{flex: 1}} >
            <Text> HomeScreen </Text>
            <Button 
                title='Log-out' 
                onPress={() => {
                   logOut() 
                }} 
            />

            <View  style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'green'
            }} />
            

        </View>
    );
}
