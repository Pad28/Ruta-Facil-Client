import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasAdminProps } from '../navigaton/StackRutasAdminNavigation';
import { colors, styles } from '../theme/appTheme';
import { Row, Table } from 'react-native-table-component';

interface Props extends StackScreenProps<StackRutasAdminProps, 'ModificarHorarioScreen'>{}
export const ModificarHorarioScreen = ( { navigation, route }: Props ) => {
    const { ...ruta } = route.params;
    const [ tableData, setTableData ] = useState<string[][]>();
    const [ tableHead, setTableHead ] = useState<string[]>(['', ruta.origen, ruta.destino]);
    const [ tableHead2, setTableHead2 ] = useState<string[]>(['Unidad', 'Hora de salida', 'Hora llegada']);


    return (
        <View style={ styles.containerTopTabNav } >
            <HeaderRutaDetail 
                onPressNavigate={() => {
                    navigation.pop()
                }}
                title='Horario'
            />

            <View
                style={{
                    flex: 1
                }}
            >
                <Table borderStyle={localStyles.borderStyleTable} >
                    <Row 
                        data={tableHead}
                        textStyle={localStyles.headText}
                        style={{ height: 40 }}
                    />
                    <Row 
                        style={{ height: 40 }}
                        data={tableHead2}
                        textStyle={ localStyles.subTitletext }
                    />
                    <Row
                        style={{ height: 40 }}
                        data={[' ', '00:00', '00:00']}
                        textStyle={localStyles.cellText}
                    />
                    <Row
                        style={{ height: 40 }}
                        data={[' ', '00:00', '00:00']}
                        textStyle={localStyles.cellText}
                    />
                    <Row
                        style={{ height: 40 }}
                        data={[' ', '00:00', '00:00']}
                        textStyle={localStyles.cellText}
                    />
                    <Row
                        style={{ height: 40 }}
                        data={[' ', '00:00', '00:00']}
                        textStyle={localStyles.cellText}
                    />
                    <Row
                        style={{ height: 40 }}
                        data={[' ', '00:00', '00:00']}
                        textStyle={localStyles.cellText}
                    />
                    <Row
                        style={{ height: 40 }}
                        data={[' ', '00:00', '00:00']}
                        textStyle={localStyles.cellText}
                    />
                    <Row
                        style={{ height: 40 }}
                        data={[' ', '00:00', '00:00']}
                        textStyle={localStyles.cellText}
                    />
                    <Row
                        style={{ height: 40 }}
                        data={[' ', '00:00', '00:00']}
                        textStyle={localStyles.cellText}
                    />
                    <Row
                        style={{ height: 40 }}
                        data={[' ', '00:00', '00:00']}
                        textStyle={localStyles.cellText}
                    />
                </Table>
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    borderStyleTable: {
        borderWidth: 2,
        borderColor: 'black',
    },
    headText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    subTitletext: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: colors.terciario,
    },
    cellText: {
        fontSize: 16,
        alignSelf: 'center',
    }
});