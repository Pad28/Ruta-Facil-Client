import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react'
import { Button, Text, View } from 'react-native';

interface Props extends DrawerScreenProps<any, any> {};

export const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={{ marginTop: 50 }} >
            <Text> HomeScreen </Text>
            <Button 
                title='Log-out' 
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'LoginStackNavigation' }]
                    })
                }} 
            />
        </View>
    );
}
