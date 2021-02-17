import { types } from "../types/types";

/* const state = { 
    name: 'Aicos',
    logged: true
}*/
export const authReducer = (state={}, action) =>{
    switch (action.type) {
        case types.login:
            return{...action.payload, logged: true}
        // todo el { } es el user
        case types.logout:
            return { logged: false }

        default:
            return state;
    }
}