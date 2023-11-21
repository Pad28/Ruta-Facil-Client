import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export const HeaderDrawer = ( {toogle}: { toogle: () => void } ) => {
    return (
        <View
            style={{
                marginTop: 26,
                alignItems: 'center',
                flexDirection: 'row',
                height: 60,
                backgroundColor: colors.primario
            }}
        >   
            <StatusBar backgroundColor={ colors.primario }/>
            <TouchableOpacity 
                style={{ 
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 18, 
                    backgroundColor: colors.terciario, 
                    borderRadius: 22,
                    height: 50,
                    width: 50,
                }} 
                onPress={toogle}
            >
                <Ionicons name='menu' size={40} color={'black'} />
            </TouchableOpacity>
        </View>
    );
}
