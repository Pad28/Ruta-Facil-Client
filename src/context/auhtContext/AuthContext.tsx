import { createContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserAuthenticatedInterface } from "../../interfaces/UserAuthenticatedInterface";
import { authReducer } from "./authReducer";
import { descargarUserImg } from "../../helpers/descargar-user-img";
import { rutaFacilRegistro } from "../../api/rutaFacilRestServer";
import { Alert } from "react-native";

export interface AuthState {
    isloggedIn: boolean;
    userAuthenticated?: UserAuthenticatedInterface;
    imageFile?: string;
}

export const auhtInitState: AuthState = {
    isloggedIn: false
}

export interface AuthContextProps {
    authState: AuthState;
    logIn: ( user: UserAuthenticatedInterface ) => void;
    logOut: () => void;
    isLoadingUser: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);
export const AuthProvider = ({children}: { children: React.JSX.Element | React.JSX.Element[] }) => {
    const [authState, dispatch] = useReducer( authReducer, auhtInitState);
    const [ isLoadingUser, setIsLoadingUser ] = useState(false);


    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        setIsLoadingUser(true);
        const user = await AsyncStorage.getItem('userAuthenticated');
        
        if(!user) return dispatch({ type: 'logOut' });
        const userParse = (JSON.parse(user) as UserAuthenticatedInterface);
        try {
            await rutaFacilRegistro.post('/api/auth/validar-token', {}, {
                headers: { 'api-key': userParse.token }
            });
        } catch (error) {
            Alert.alert('Error', 'Su sesión a expirado');
            setIsLoadingUser(false);
            logOut();
            return;
        }

        logIn( userParse );
        setIsLoadingUser(false);
    }
    
    const logIn = (userAuthenticated: UserAuthenticatedInterface) => {
        descargarUserImg(userAuthenticated.user.id, userAuthenticated.user.foto)
            .then( async(userImage) => {
                if(userImage) {
                    dispatch({ type: "logIn" , payload: { userAuthenticated, userImage }});
                    await AsyncStorage.setItem('userAuthenticated', JSON.stringify(userAuthenticated));
                }
            })
            .catch(err => console.log(err));
    }

    const logOut = () => {
        AsyncStorage.removeItem('userAuthenticated')
            .then(() => {
                dispatch({ type: 'logOut' });
                setIsLoadingUser(true);
            })
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                logIn,
                logOut,
                isLoadingUser
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}