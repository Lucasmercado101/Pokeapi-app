import React from "react";
import "./landing.sass";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <header className="landing__header">
        <h1>PokeApi-app</h1>
        <ul className="browseLinksList">
          <li className="browseLinksList__item">
            <Link to="/pokemon">Pokemons</Link>
          </li>
          <li className="browseLinksList__item">
            <Link to="/berry">Berries</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Landing;
