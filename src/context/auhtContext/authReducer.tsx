import { UserAuthenticatedInterface } from "../../interfaces/UserAuthenticatedInterface";
import { AuthState } from "./AuthContext";


type authAction = 
    | { type: 'logIn', payload: UserAuthenticatedInterface }
    | { type: 'logOut' };

export const authReducer = (state: AuthState, action: authAction ): AuthState => {
    switch (action.type) {
        case 'logIn':
            return {
                isloggedIn: true,
                user: action.payload,                
            }    

        case 'logOut':
            return {
                isloggedIn: false
            }

        default:
            return state;
    }
}