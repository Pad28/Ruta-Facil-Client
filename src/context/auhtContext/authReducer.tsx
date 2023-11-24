import { UserAuthenticatedInterface } from "../../interfaces/UserAuthenticatedInterface";
import { AuthState } from "./AuthContext";

type userPayload = {
    userAuthenticated: UserAuthenticatedInterface;
    userImage: string;
}

type authAction = 
    | { type: 'logIn', payload: userPayload }
    | { type: 'logOut' };

export const authReducer = (state: AuthState, action: authAction ): AuthState => {
    switch (action.type) {
        case 'logIn':
            return {
                isloggedIn: true,
                userAuthenticated: action.payload.userAuthenticated,
                imageFile: action.payload.userImage                
            }    

        case 'logOut':
            return {
                isloggedIn: false
            }

        default:
            return state;
    }
}