import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string';
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {
  
  const navigate = useNavigate(); //para navegar entre paginas
  const location = useLocation(); // para sacar la ubicaion de donde nos encontramos

  const {q = ''} = queryString.parse(location.search); //con query string separas los queryParameteers de manera mas facil
  const heroes = getHeroesByName(q);

  const { onInputChange, searchText } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}> 

            <input 
              type="text" 
              className="form-control" 
              name="searchText" 
              placeholder="Search a Hero" 
              autoComplete="off" 
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a Hero
          </div>

          <div className="alert alert-danger">
            No resulrs <b>{ q }</b>
          </div>

          {heroes.map(heroe => (
             <HeroCard key={heroe.id} {...heroe}/> 
          ))}
        </div>
      </div>
    </>

  )
}
