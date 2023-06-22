import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {
  
   // Aqui usamos el useMemo como precausion en caso de que cambie el estado del componente y asi guarda el valor de la funcion
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
        ))
      }
    </div>
  )
}
