import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.sass";
import NotFound from "./Views/NotFound";
import PokemonSearch from "./Views/Pokemons/Pokemons";
import Navbar from "./Views/Navbar/Navbar";
import Pokemon from "./Views/Pokemon/Pokemon";

function App() {
  return (
    <Router>
      <Route component={Navbar} />
      <Switch>
        <Route path="/" exact component={PokemonSearch} />
        <Route path="/pokemon/:pokemon" exact component={Pokemon} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
