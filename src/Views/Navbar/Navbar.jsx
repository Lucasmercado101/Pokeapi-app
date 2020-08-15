import React, { useState } from "react";
import "./navbar.sass";
import SearchIcon from "../../Images/search.svg";
import MenuIcon from "../../Images/arrow.svg";
import PikachuFace from "../../Images/pikachuface.svg";
import Pokeball from "../../Images/pokeball.svg";
import Berry from "../../Images/grape.svg";

export default function (props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchOption, setSearchOption] = useState("Pokeball");
  const [isOpen, setIsOpen] = useState(false);
  const options = { Pokeball, Berry };

  const searchBy = (iconName) => {
    setIsOpen(false);
    setSearchOption(iconName);
  };

  const searchFor = (e) => {
    e.preventDefault();
    switch (searchOption) {
      case "Pokeball":
        return props.history.push(`/pokemon/${searchValue}`);
      case "Berry":
        return props.history.push(`/berry/${searchValue}`);
      default:
        throw Error();
    }
  };

  return (
    <nav className="navbar">
      <button className="pokeApi-icon">
        <img
          onClick={() => props.history.push("/")}
          src={PikachuFace}
          alt="Pikachu Face"
          title={"PokeApi app"}
        />
      </button>
      <form onSubmit={searchFor} className="searchBar">
        <label className="searchIcon" htmlFor="navSearchBar">
          <img src={SearchIcon} />
        </label>
        <input
          onBlur={() => setSearchValue("")}
          className="searchField"
          formNoValidate
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          id="navSearchBar"
        />
      </form>
      <div className="picker">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`picker__current ${isOpen ? "picker__current--open" : ""}`}
        >
          <img height="40" src={options[searchOption]} alt="Menu" />
          <img
            height="20"
            className="picker__menuButton"
            src={MenuIcon}
            alt="Menu"
          />
        </button>
        <div
          className={`picker__options ${
            isOpen ? "picker__options--shown" : "picker__options--hidden"
          }`}
        >
          {Object.keys(options).map((icon, i) => (
            <button onClick={() => searchBy(icon)} key={i}>
              <img height="40" src={options[icon]} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
