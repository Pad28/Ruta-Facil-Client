import { StyleSheet } from "react-native";

const colors = {
    primario: '#67C8D1', // azulito
    secundario: '#FBB90F', // amarillo
    terciario: '#4FA264', // verde
}

const styles = StyleSheet.create({
    tiulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
        flex: 1,
        alignItems: 'center'
    },
});

export {
    styles,
    colors,
}