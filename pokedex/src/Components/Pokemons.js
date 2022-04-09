import React, { useState, useEffect, useMemo } from "react";
import RetornaCor from "./RetornaCor";
import { getPokemons } from "../request";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const filteredPokemons = useMemo(
    () =>
      pokemons?.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      ),
    [pokemons, search]
  );

  useEffect(async () => {
    const data = await getPokemons();
    setPokemons(data.pokemon);
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <label>
        Busca :<input id="searchPK" type="text" onChange={handleSearch}></input>
      </label>
      <div className="row">
        {filteredPokemons.map(({ id, name, img, type, height, weight }) => (
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemons;
