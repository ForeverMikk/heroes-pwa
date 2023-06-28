import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchPage } from "../../../src/heroes";

/* eslint-disable no-undef */

// Mock del react router
const mockedUseNavigate = jest.fn();

// Hacemos un mock de todo react-router-dom y hacemos mock del useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () =>  mockedUseNavigate
}));

describe('pruebas en <SearchPage />', () => { 

    beforeEach(() => jest.clearAllMocks()); //Para limpiar cualquier mock

    test('debe de mostrarse con valores por defecto', () => { 

        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
        
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrarse a batman y el input con el valor del query', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        
        const input = screen.getByRole('textbox'); //DEfinimos nuestro input
        expect(input.value).toBe('batman') ; //Vemos si en el input se inserto batman
        
        const img = screen.getByRole('img'); //definimos la imagen
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg'); //vemos si se renderiza la imagen del batman

        const alertDanger = screen.getByLabelText('alert-danger'); //obtenemos el div del alert
        expect(alertDanger.style.display).toBe('none'); //verificamos que la propiedad sea none
    });

    test('debe de mostrar error si no se encuentra el hero (batman123)', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const alertDanger = screen.getByLabelText('alert-danger'); //obtenemos el div del alert
        expect(alertDanger.style.display).toBe(''); //verificamos que el display sea un string vacio
    });

    test('debe de llamar el navigate a la pantalla nueva', () => {
        
        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox'); //Definimos el input
        fireEvent.change(input, {target: {name: 'searchText', value: inputValue}}); //Evento que manda a llamar el input
        
        const form = screen.getByRole('form'); //Definimos el formulario
        fireEvent.submit(form); //Hacemos el submit del frmulario

        expect(mockedUseNavigate).toHaveBeenCalled(); //Verificamos si el Navigate se mando a llamar al hacer click
        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`); //Verificamos si el Navigate se mando a llamar con el query ?q=superman
        
    });

});