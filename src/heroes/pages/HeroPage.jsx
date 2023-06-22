import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();
  // Aqui usamos el useMemo como precausion en caso de que cambie el estado del componente y asi guarda el valor de la funcion
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
console.log(hero);
  const onNavigateBack = () => {
    navigate(-1);
  }

  if(!hero){
    return <Navigate to="/marvel" />
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${heroId}.jpg`} 
          alt={hero.superhero} 
          className="img-thumbnail"
        />
      </div>

    <div className="col-8">
      <h3>{hero.superhero}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
        <li className="list-group-item"><b>Publiser: </b>{hero.publisher}</li>
        <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
      </ul>

      <h5 className="mt-3">Characters</h5>
      <p>{hero.characters}</p>

      <button 
        className="btn btn-outline-primary"
        onClick={onNavigateBack}  
      >
        Back
      </button>
    </div>

    </div>
  )
  

}
