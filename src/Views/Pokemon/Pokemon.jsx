import React, { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./pokemon.sass";
import DropdownDetails from "../../Components/dropdownDetails";
const pokeApi = "https://pokeapi.co/api/v2/";

export default function Pokemon(props) {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    fetch(pokeApi + "pokemon/" + props.match.params.pokemon, { method: "GET" })
      .then((resp) => resp.json())
      .then((data) => {
        setPokemonData(data);
      });

    return () => setPokemonData({});
  }, [props.match.params.pokemon]);

  const capitalizeFirstLetter = (string) =>
    string.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <article className="pokemon">
      {Object.keys(pokemonData).length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <td className="pokemonName" colSpan="2">
                  {capitalizeFirstLetter(pokemonData.name)}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">
                  <img
                    src={
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                  ></img>
                </td>
              </tr>
              <tr>
                <th>Base Experience</th>
                <td>{pokemonData.base_experience}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{pokemonData.weight}</td>
              </tr>
              <tr>
                <th>Height</th>
                <td>{pokemonData.height}</td>
              </tr>
              <tr>
                <th>Types</th>
                <td>
                  {pokemonData.types.map((data, i) => (
                    <p key={i}>{data.type.name}</p>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Stats</th>
                <td colSpan="2">
                  <table>
                    <tbody>
                      {pokemonData.stats.map((data, i) => (
                        <tr key={i}>
                          <th>{data.stat.name}</th>
                          <td>{data.base_stat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
              {/* <tr>
                <th>Stats</th>
                <td>
                  {pokemonData.stats.map((data, i) => (
                    <div key={i} style={{ display: "table-row" }}>
                      <p style={{ display: "table-cell" }}>{data.stat.name}</p>
                      <p style={{ display: "table-cell" }} key={i}>
                        {data.base_stat}
                      </p>
                    </div>
                  ))}
                </td>
              </tr> */}
            </tbody>
          </table>
          <section className="section">
            <DropdownDetails title="Moves">
              <ul>
                {pokemonData.moves.map(({ move }, i) => (
                  <li key={i}>
                    {/* <Link to={move.url}> */}
                    {move.name}
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </DropdownDetails>
          </section>
          <section className="section">
            <DropdownDetails title={"Held Items"}>
              <ul>
                {Object.keys(pokemonData.held_items).length > 0 ? (
                  pokemonData.held_items.map((item, i) => (
                    <li key={i}>
                      {/* <Link to={item.item.url}>{item.item.name}</Link> */}
                      {item.item.name}
                      {/* item.version.details */}
                    </li>
                  ))
                ) : (
                  <li>No held items</li>
                )}
              </ul>
            </DropdownDetails>
          </section>
          <section className="section">
            <DropdownDetails title="Forms">
              <ul>
                {pokemonData.forms.map((form, i) => (
                  // <Link to={form.url}>
                  <li key={i}>{form.name}</li>
                  // </Link>
                ))}
              </ul>
            </DropdownDetails>
          </section>
          <section className="section">
            <DropdownDetails title={"Abilities"}>
              <ul>
                {pokemonData.abilities.map((item, i) => (
                  <li key={i}>
                    {/* <Link to={item.ability.url}> */}
                    <div>{item.ability.name}</div>
                    {/* </Link> */}
                    <div>
                      Hidden ability:{item.ability.is_hidden ? "No" : "Yes"}
                    </div>
                    <div>Slot: {item.slot}</div>
                  </li>
                ))}
              </ul>
            </DropdownDetails>
          </section>
          <section className="section">
            <DropdownDetails title="Game Indices">
              <ul>
                {pokemonData.game_indices.map((index, i) => (
                  <li key={i}>
                    <p>Index: {index.game_index}</p>
                    {/* <Link to={index.version.url}> */}
                    <p>Version: {index.version.name}</p>
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </DropdownDetails>
          </section>
        </>
      )}
    </article>
  );
}
