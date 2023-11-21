import { createContext, useReducer } from "react";
import { UserAuthenticatedInterface } from "../../interfaces/UserAuthenticatedInterface";
import { authReducer } from "./authReducer";

export interface AuthState {
    isloggedIn: boolean;
    user?: UserAuthenticatedInterface;    
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
        dispatch({ type: "logIn" , payload: user});
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