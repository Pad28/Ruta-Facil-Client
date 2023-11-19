import axios from "axios";

export const rutaFacilRegistro = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
});