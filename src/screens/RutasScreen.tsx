import React from 'react'
import { View } from 'react-native';

import { colors, styles } from '../theme/appTheme';
import { InputBotonRight } from '../components';

export const RutasScreen = () => {

    return (
        <View style={[ 
            styles.containerTopTabNav, 
            { alignItems: 'center' } 
            ]}
        >
            <View
                style={{ marginTop: 12 }}
            >
                <InputBotonRight 
                    action={(termino) => console.log(termino)}
                    iconName='search'
                    placeHolder='Buscar'
                    colorBoton={ colors.terciario }
                />
            </View>
            
        </View>
    );
}

