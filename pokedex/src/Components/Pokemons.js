import React, { useState, useEffect } from "react";
import RetornaCor from "./RetornaCor";

const PAGE_NUMBER = 1;

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    const data = await response.json();
    setPokemons(data.pokemon);
  });

  return (
    <div className="row">
      {pokemons.map(({ id, num, name, img, type, height, weight }) => (
        <div className="column" key={id}>
          <div className="card" style={{ background: RetornaCor(type[0]) }}>
            <div className="img-card">
              <img src={img} alt={name}></img>
            </div>
            <p>
              <strong> Name:</strong> {name}
            </p>
            <p>
              <strong>Type: </strong> {type.map((type) => type).join(" | ")}
            </p>
            <p>
              <strong>Height: </strong> {height}
            </p>
            <p>
              <strong>Weight: </strong> {weight}
            </p>
            {/* <small>Number: {num}</small> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pokemons;
