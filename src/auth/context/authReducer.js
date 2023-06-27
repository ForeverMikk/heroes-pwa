import { types } from "../types/types";

// Nunca llamar funciones como el local storage aqui
// Aqui solo se maneja el estado
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
            
        case types.logout:
            return {
                logged: false
            };
    
        default:
            return state;
    }
}