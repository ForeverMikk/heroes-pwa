import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm"

export const SearchPage = () => {
  
  const navigate = useNavigate(); //para navegar entre paginas
  const location = useLocation(); // para sacar la ubicaion de donde nos encontramos

  const {q = ''} = queryString.parse(location.search); //con query string separas los queryParameteers de manera mas facil
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0); //Si no hay nada en el query es true
  const showError = (q.length > 0) && heroes.length === 0; // Si hay algo en el query pero no regreso ningun heroe es true

  const { onInputChange, searchText } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if(searchText.trim().length <= 1) return;

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

          {/* Hotra Forma de mostrar el Texto */}
          {/* {
            (q === '')
            ? <div className="alert alert-primary">Search a Hero</div>
            : (heroes.length === 0) && <div className="alert alert-danger">No resulrs <b>{ q }</b></div>
          } */}

          <div 
            className="alert alert-primary animate__animated animate__fadeIn" 
            style={{display: showSearch ? '' : 'none'}}
          >
            Search a Hero
          </div>

          <div 
            className="alert alert-danger animate__animated animate__fadeInLeft" 
            style={{display: showError ? '' : 'none'}}
          >
            not found <b>{q}</b>
          </div>

          {heroes.map(heroe => (
             <HeroCard key={heroe.id} {...heroe}/> 
          ))}
        </div>
      </div>
    </>

  )
}
