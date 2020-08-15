import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./search.sass";
const pokeApi = "https://pokeapi.co/api/v2/";

export default function Pokemons(props) {
  const [searchResultList, setSearchResults] = useState({});

  const capitalizeFirstLetter = (string) =>
    string.replace(/^\w/, (c) => c.toUpperCase());

  useEffect(() => {
    fetch(pokeApi + props.match.params.searchTerm, { method: "GET" })
      .then((resp) => resp.json())
      .then((data) => {
        document.title =
          capitalizeFirstLetter(props.match.params.searchTerm) + "(s) results";
        setSearchResults(data);
      });
  }, []);

  const nextResults = () => {
    setSearchResults({});
    fetch(searchResultList.next, { method: "GET" })
      .then((resp) => resp.json())
      .then((data) => {
        setSearchResults(data);
      });
  };

  const previousResults = () => {
    setSearchResults({});
    fetch(searchResultList.previous, { method: "GET" })
      .then((resp) => resp.json())
      .then((data) => {
        setSearchResults(data);
      });
  };

  return (
    <div>
      {Object.keys(searchResultList).length > 0 && (
        <>
          <h1 style={{ textAlign: "center" }}>
            Total: {searchResultList.count}
          </h1>
          <h2 style={{ textAlign: "center" }}>
            Results: {searchResultList.results.length}
          </h2>
        </>
      )}
      <ul className="searchResultsList">
        {Object.keys(searchResultList).length > 0 &&
          searchResultList.results.map((item, i) => (
            <Link
              key={i}
              className="searchResultsList__item"
              to={`/${props.match.params.searchTerm}/${item.name}`}
            >
              <li>{item.name.split("-").join(" ")}</li>
            </Link>
          ))}
      </ul>

      <div className="links">
        {searchResultList.previous && (
          <button onClick={previousResults}>Previous</button>
        )}
        {searchResultList.next && <button onClick={nextResults}>Next</button>}
      </div>
    </div>
  );
}