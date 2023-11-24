import { UserAuthenticatedInterface } from "../../interfaces/UserAuthenticatedInterface";
import { AuthState } from "./AuthContext";

type userPayload = {
    user: UserAuthenticatedInterface;
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
                user: action.payload.user,
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