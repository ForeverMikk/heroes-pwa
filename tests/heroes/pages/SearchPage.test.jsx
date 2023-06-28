import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { SearchPage } from "../../../src/heroes";

/* eslint-disable no-undef */
describe('pruebas en <SearchPage />', () => { 

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

        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('none');
    });

});