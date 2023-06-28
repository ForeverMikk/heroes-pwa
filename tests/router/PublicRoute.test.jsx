import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { PublicRoute } from "../../src/router";
import { AuthContext } from '../../src/auth';


/* eslint-disable no-undef */
describe('pruebas en <PublicRoute />', () => { 
    
    test('debe de mostrar el children si NO esta autenticado', () => { 
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute> 
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy(); //Esto solo es false si renderiza el children
    });

    test('debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Endless',
                id: '123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute> 
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Pagina de Marvel</h1>} />
                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pagina de Marvel') ).toBeTruthy();

    });
});