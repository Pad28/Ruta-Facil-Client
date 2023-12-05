import React, { useContext } from 'react'
import * as FileSystem from 'expo-file-system';
import { AuthContext } from '../context/auhtContext/AuthContext';
import axios from 'axios';

export const useUploadImage = () => {
    const { authState } = useContext(AuthContext);

    const uploadImage = async (uri: string, path: string) => {
        const formData = new FormData();
        const data = { uri, type: 'image/jpeg', name: 'archivo', filename: 'profile' };
        formData.append('archivo', data);
        formData.append('Content-type', 'image/jpeg');

        const resp = await axios.put(
            `${process.env.EXPO_PUBLIC_API_URL}` + path, 
            formData,
            { headers: { 'api-key': authState.userAuthenticated?.token } } 
        ).catch(err => {
            if(err.request) {
                console.log(err.config);
                
            }
        })

        
    };

    return {
        uploadImage
    }
}
