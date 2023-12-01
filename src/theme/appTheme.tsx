import { Dimensions, StyleSheet } from "react-native";
const { height: heightWindow, width: widthWindow } = Dimensions.get('window');

const colors = {
    primario: '#67C8D1', // azulito 
    secundario: '#FBB90F', // amarillo
    terciario: '#4FA264', // verde 

    fondo: '#EFEFEF'
}

const styles = StyleSheet.create({
    tiulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitulo: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    container: {
        flex: 1,
        backgroundColor: colors.fondo
    },
    body: {
        flex: 1,
        alignItems: 'center'
    },
    containerTabNav: {
        alignSelf: 'center',
        marginTop: 8,
        height: heightWindow - 216, // 220
        width: widthWindow - 20,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    containerTopTabNav: {
        alignSelf: 'center',
        marginTop: 8,
        height: heightWindow - 276, // 220
        width: widthWindow - 20,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: 'white',
        overflow: 'hidden'
    }
});

export {
    styles,
    colors,
    widthWindow,
    heightWindow,
}