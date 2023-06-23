import { heroes } from "../data/heroes";


export const getHeroesByName = (name) => {
    name = name.toLocaleLowerCase().trim(); //asa todo a minusculas y quita espacios de mas

    if(name.length === 0) return [];

    //regresa todos los heroes que incluyan el texto que ingresaste
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    ); 
}
