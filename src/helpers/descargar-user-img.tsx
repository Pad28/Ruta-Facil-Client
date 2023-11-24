import * as FileSystem from 'expo-file-system';

export const descargarUserImg = async(userID: string, foto: string) => {
    const uri = `${process.env.EXPO_PUBLIC_API_URL}/api/uploads/foto-perfil/${userID}`;
    
    try {
        console.log(FileSystem.documentDirectory);
        const archivoLocal = await FileSystem.downloadAsync(uri, FileSystem.documentDirectory + foto);

        const dir = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory!);
        console.log(dir);
        
        return archivoLocal.uri;
    } catch (error) {
        console.error('Error al descargar la imagen:', error);
    }
}