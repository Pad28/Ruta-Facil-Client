import React from 'react'
import { Dimensions, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackLoginParams } from '../navigaton/LoginStackNavigation';

interface Props {
    navigation: StackNavigationProp<StackLoginParams, any, any>;
    title: string;
    style?: StyleProp<ViewStyle>;
}

export const HeaderAppBotton = ({ title, navigation, style }: Props) => {
    
    const { width: widhtScreen } = Dimensions.get('screen')
    
    return (
        <View 
            style={[ localStyles.container, { width: widhtScreen }, style ]} 
        >
            <TouchableOpacity
                style={ localStyles.boton }
                onPress={() => navigation.pop()}
            >
                <Ionicons name='chevron-back-outline' size={32}  color={'black'} />
                <Text style={ localStyles.text } >
                    { title }
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.primario,
        height: 10
    },
    boton: {
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 5,
    }
});
