import Pokemons from "./Components/Pokemons";
import "../src/styles/App.css";
import logo from "./assets/logo.png";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <div className="pokebola-logo">
        <img src={logo} className="App-logo"></img>
      </div>
      <Pokemons />
    </div>
  );
};

export default App;
