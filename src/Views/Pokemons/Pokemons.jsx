import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pokemons.sass";
const pokeApi = "https://pokeapi.co/api/v2/";

export default function Pokemons() {
  const [pokemonsList, setPokemonsList] = useState({});

  useEffect(() => {
    fetch(pokeApi + "pokemon", { method: "GET" })
      .then((resp) => resp.json())
      .then((data) => {
        setPokemonsList(data);
      });
  }, []);

  const nextResults = () => {
    setPokemonsList({});
    fetch(pokemonsList.next, { method: "GET" })
      .then((resp) => resp.json())
      .then((data) => {
        setPokemonsList(data);
      });
  };

  const previousResults = () => {
    setPokemonsList({});
    fetch(pokemonsList.previous, { method: "GET" })
      .then((resp) => resp.json())
      .then((data) => {
        setPokemonsList(data);
      });
  };

  return (
    <div>
      <h1>Pokemons: {pokemonsList.count}</h1>
      {Object.keys(pokemonsList).length > 0 && (
        <h2>Results: {pokemonsList.results.length}</h2>
      )}
      <ul className="pokemonsList">
        {Object.keys(pokemonsList).length > 0 &&
          pokemonsList.results.map((pkmn, i) => (
            <Link
              key={i}
              className="pokemonsList__item"
              to={`/pokemon/${pkmn.name}`}
            >
              <li>{pkmn.name}</li>
            </Link>
          ))}
      </ul>

      <div className="links">
        {pokemonsList.previous && (
          <button onClick={previousResults}>Previous</button>
        )}
        {pokemonsList.next && <button onClick={nextResults}>Next</button>}
      </div>
    </div>
  );
}
