import { types } from "../../../src/auth";

/* eslint-disable no-undef */
describe('pruebas en types', () => { 

    test('debe de regresar estos types', () => { 

        expect(types).toEqual({ //Al evaluar esto verificas que todas las propiedades sean exactamente las que definiste
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });

    });
});
