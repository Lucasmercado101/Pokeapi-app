import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.sass";
import NotFound from "./Views/NotFound";
import Landing from "./Views/Landing/Landing";
import Search from "./Views/Search/Search";
import Item from "./Views/Item/Item";
import Berry from "./Views/Berry/Berry";
import Navbar from "./Views/Navbar/Navbar";
import Pokemon from "./Views/Pokemon/Pokemon";
import Location from "./Views/Location/Location";

function App() {
  return (
    <Router>
      <Route component={Navbar} />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/:searchTerm" exact component={Search} />
        <Route path="/berry/:berry" exact component={Berry} />
        <Route path="/pokemon/:pokemon" exact component={Pokemon} />
        <Route path="/item/:item" exact component={Item} />
        <Route path="/location/:location" exact component={Location} />
      </Switch>
    </Router>
  );
}

export default App;
