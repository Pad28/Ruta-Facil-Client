import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    action: () => void;
}

export const HeaderLeftStack = ({ title, action }: Props) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                marginLeft: 10,
                alignItems: 'center'
            }}
            onPress={action}
        >
            <Ionicons name='chevron-back-outline' size={32}  />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >
                { title }
            </Text>
        </TouchableOpacity>
    );
}
