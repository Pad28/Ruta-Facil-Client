import React  from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeTabParams } from '../navigaton/HomeTabNavigator';

interface Props extends BottomTabScreenProps<HomeTabParams, 'SugerenciasScreen'> {}

export const SugerenciasScreen = ({ navigation }: Props) => {
    

    return (
        <View style={[ styles.containerTabNav ]} >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium laboriosam perspiciatis illo quae veritatis exercitationem tenetur fugiat unde vitae quaerat officiis et, ipsam quibusdam numquam maiores magni adipisci facere explicabo?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium laboriosam perspiciatis illo quae veritatis exercitationem tenetur fugiat unde vitae quaerat officiis et, ipsam quibusdam numquam maiores magni adipisci facere explicabo?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium laboriosam perspiciatis illo quae veritatis exercitationem tenetur fugiat unde vitae quaerat officiis et, ipsam quibusdam numquam maiores magni adipisci facere explicabo?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium laboriosam perspiciatis illo quae veritatis exercitationem tenetur fugiat unde vitae quaerat officiis et, ipsam quibusdam numquam maiores magni adipisci facere explicabo?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium laboriosam perspiciatis illo quae veritatis exercitationem tenetur fugiat unde vitae quaerat officiis et, ipsam quibusdam numquam maiores magni adipisci facere explicabo?</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium laboriosam perspiciatis illo quae veritatis exercitationem tenetur fugiat unde vitae quaerat officiis et, ipsam quibusdam numquam maiores magni adipisci facere explicabo?</Text>
                    <TextInput 
                        multiline
                        numberOfLines={10}
                        style={{ borderWidth: 2, borderColor: 'black' }}
                    />
                    <View style={{ flex: 1, backgroundColor: 'red', height: 500 }} />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}
