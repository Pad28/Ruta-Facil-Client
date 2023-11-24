import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

export const descargarUserImg = async(userID: string, foto: string) => {
    const uri = `${process.env.EXPO_PUBLIC_API_URL}/api/uploads/foto-perfil/${userID}`;
    
    try {
        const previousImage =  FileSystem.documentDirectory + (await AsyncStorage.getItem('userImage'))!;

        const { exists } = await FileSystem.getInfoAsync(previousImage);
        if(previousImage && exists ) {
            await FileSystem.deleteAsync(previousImage);
        }

        const archivoLocal = await FileSystem.downloadAsync(uri, FileSystem.documentDirectory + foto);
        await AsyncStorage.setItem('userImage', foto);
        return archivoLocal.uri;
    } catch (error) {
        console.error('Error al descargar la imagen:', error);
    }
}