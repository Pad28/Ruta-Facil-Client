import React from 'react'
import { Text, View } from 'react-native';
import { colors } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

interface Props {
    title: string;
    onPressNavigate: () => void;
}

export const HeaderRutaDetail = ( { title, onPressNavigate }: Props ) => {
    return (
        <View
                style={{
                    height: 50,
                    backgroundColor: colors.terciario,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}
            >   
                <StatusBar 
                    style='light'
                    backgroundColor={ colors.primario }
                />
                <TouchableOpacity
                    style={{
                        marginLeft: 10
                    }}
                    onPress={onPressNavigate}
                >
                    <Ionicons name='arrow-back' size={38} color={'white'} />
                </TouchableOpacity>
                
                <Text
                    style={{ 
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: colors.fondo,
                        // marginLeft: 10,
                    }}
                > 
                { title }   
                </Text>
                
                <View
                    style={{
                        backgroundColor: 'red',
                        width: 50
                    }} 
                />
            </View>
    );
}
