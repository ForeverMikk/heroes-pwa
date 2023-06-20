import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({publisher}) => {
  
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
        {heroes.map((heroe) => (
            <li key={heroe.id}>
                <h2>
                    {heroe.superhero}
                </h2>
                <p>{heroe.alter_ego}</p>
            </li>
        ))}
        <li>Batman</li>
    </ul>
  )
}
