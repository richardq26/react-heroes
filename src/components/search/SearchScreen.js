import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import queryString from "query-string";
import { getHeroesByName } from "../../selectors/getHeroesByName";
export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ searchText: q });
  const { searchText } = formValues;

  // const heroesFiltered = heroes; Acá mostraría todos

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <h4>Buscador</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Busca a tu héroe"
              name="searchText"
              className="form-control"
              value={searchText}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-primary col-12 mt-2">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-8">
          <h4>Resultados</h4>
          <hr />
          {(q==='') && <div className="alert alert-info">Debe buscar un héroe.</div>}
          {(q!=='' && heroesFiltered.length === 0 ) && <div className="alert alert-info">No se encontraron los héroes</div>}
          
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
