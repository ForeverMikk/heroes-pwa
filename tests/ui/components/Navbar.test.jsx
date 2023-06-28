import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

/* eslint-disable no-undef */

const mockedUseNavigate = jest.fn();

// Hacemos un mock de todo react-router-dom y hacemos mock del useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () =>  mockedUseNavigate
}));

describe('pruebas en el <Navbar />', () => { 
    
    const contextValue = {
        logged: true,
        user: {
            name: 'Miguel',
            id: '123'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('debe mostrar nombre del usuario logeado', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Miguel')).toBeTruthy(); //Verificamos que el usuario este logeado viendo si su texto esta el el screen
    });

    test('debe de llamar el logout y el navigate cuando das click en el boton', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button'); //Definimos nuestro boton
        fireEvent.click(logoutBtn); //Llamamos el evento del click

        expect(contextValue.logout).toHaveBeenCalled(); //Evaluamos si fue llamado el evento del click
        expect(mockedUseNavigate).toHaveBeenCalled(); //Evaluamos si fue llamada la funcion
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true }); //Evaluamos si fue llamada la con los argumentos correctos


    });
});