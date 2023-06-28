/* eslint-disable no-undef */
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { AuthContext } from "../../src/auth";
import { PrivatreRoute } from "../../src/router";

describe('Pruebas en <PrivateRoute />', () => { 

    test('debe de mostrar el children si esta autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
                name: 'Roberto',
                id: '123'
            }
        }

        // Verificamos si se llama el localStorage
        Storage.prototype.setItem = jest.fn();

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivatreRoute> 
                        <h1>Ruta Privada</h1>
                    </PrivatreRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy(); 
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

});