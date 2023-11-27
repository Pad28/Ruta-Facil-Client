import { DrawerScreenProps } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native'

import { DrawerNavigationParams } from '../navigaton/DrawerMenu';
import { styles, heightWindow} from '../theme/appTheme';

interface Props extends DrawerScreenProps<DrawerNavigationParams, 'NotificacionesScreen'> {}
export const NotificacionesScreen = ( { navigation }: Props ) => {

    return (
        <View style={[ styles.containerTabNav, localStyles.container ]} >
            <Text>NotificaionesScreen</Text>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        height: heightWindow - 110,
        alignItems: 'center',
    }
});