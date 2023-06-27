import { authReducer, types } from "../../../src/auth";

/* eslint-disable no-undef */
describe('Pruebas en authReducer', () => { 
    test('debe de retornar el estado por defecto', () => { 

        const state = authReducer({logged: false}, {}); //Envias el state

        expect(state).toEqual({logged: false}); //Verificas que sea el mismo state que enviaste
    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => { 

        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('debe de (logout) brrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Juan' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
        console.log(newState);
        expect(newState).toEqual({ logged: false });
    });
});