import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/appTheme';
import { Ionicons } from '@expo/vector-icons';

export const HeaderDrawer = ( {toogle}: { toogle: () => void } ) => {
    return (
        <View
            style={{
                // justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: 60,
                backgroundColor: colors.primario
            }}
        >
            <TouchableOpacity 
                style={{ 
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 18, 
                    // marginTop: 10, 
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
