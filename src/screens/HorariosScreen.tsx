import React, { useEffect, useState } from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { HeaderRutaDetail } from '../components/HeaderRutaDetail';
import { StackScreenProps } from '@react-navigation/stack';
import { StackRutasParams } from '../navigaton/StackRutasNavigator';
import { HorariosResponse } from '../interfaces/HorariosResponse';
import { useBusquedas } from '../hooks/useBusquedas';


interface Props extends StackScreenProps<StackRutasParams, 'HorariosScreen'> {}

export const HorariosScreen = ( { navigation, route }: Props ) => {
    const { ...ruta } = route.params;
    const {
        busqueda,
        results,
        isLoading,
    } = useBusquedas<HorariosResponse>(ruta.numero, 'Horario');

    const [ tableHead, setTableHead ] = useState<string[]>([]);
    const [ tableData, setTableData ] = useState<string[][]>();

    useEffect(() => {
        busqueda()
            .then(res => {
                setTableHead(['Dia', 'Hora']);
                setTableData(
                    (res as HorariosResponse).horarios.map(horario => {
                        const array = horario.dia_hora.split('T');
                        const dia = array[0].substring(5, 10).split('-').reverse().join('-');
                        const hora = array[1].substring(0, 5);
                        return [
                            dia, hora
                        ]
                    })
                );
                
            });
    }, []);

    return (
        <View
            style={[
                styles.containerTopTabNav
            ]}
        >

            <HeaderRutaDetail 
                title='Horarios'
                onPressNavigate={ navigation.pop }
            />
            {
                (isLoading)
                    ? (
                        <ActivityIndicator 
                            size={60} 
                            color={colors.terciario} 
                            style={{ marginTop: 180 }}
                        />
                    ) : (
                        <ScrollView
                            style={{
                                flex: 1,
                            }}
                        >
                            <View
                                style={ localStyles.containerTable }
                            >
                                <Table
                                    style={ localStyles.table }
                                    borderStyle={ localStyles.borderStyleTable }
                                >
                                    <Row 
                                        data={tableHead}
                                        textStyle={ localStyles.headertexto }
                                        style={ localStyles.head } 
                                    />
                                    <Rows 
                                        data={tableData} 
                                        style={ localStyles.data }
                                        textStyle={ localStyles.dataText }
                                    />
                                </Table>
                            </View>
                        </ScrollView>
                    )
            }

        </View>
    );
}

const localStyles = StyleSheet.create({
    containerTable: {
        flex: 1,
        padding: 16
    },
    table: {
        marginTop: 14,
    },
    borderStyleTable: {
        borderWidth: 2,
        borderColor: 'black',
    },
    headertexto: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    },
    head: {
        backgroundColor: 'lightblue',
        height: 50
    },
    data: {
        height: 40,
    },
    dataText: {
        fontSize: 16,
        alignSelf: 'center'
    }
});