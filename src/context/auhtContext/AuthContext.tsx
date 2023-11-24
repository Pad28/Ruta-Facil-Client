import { createContext, useReducer } from "react";
import { UserAuthenticatedInterface } from "../../interfaces/UserAuthenticatedInterface";
import { authReducer } from "./authReducer";
import { descargarUserImg } from "../../helpers/descargar-user-img";

export interface AuthState {
    isloggedIn: boolean;
    user?: UserAuthenticatedInterface;
    imageFile?: string;
}

export const auhtInitState: AuthState = {
    isloggedIn: false
}

export interface AuthContextProps {
    authState: AuthState;
    logIn: ( user: UserAuthenticatedInterface ) => void;
    logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: { children: React.JSX.Element | React.JSX.Element[] }) => {
    const [authState, dispatch] = useReducer( authReducer, auhtInitState);
    
    const logIn = (user: UserAuthenticatedInterface) => {
        descargarUserImg(user.user.id, user.user.foto)
            .then( userImage => {
                if(userImage) {
                    dispatch({ type: "logIn" , payload: { user, userImage }});
                }
            })
            .catch(err => console.log(err));
        
        
    }

    const logOut = () => {
        dispatch({ type: 'logOut' });
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                logIn,
                logOut
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}