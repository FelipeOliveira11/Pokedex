import Pokemons from "./Components/Pokemons";
import "../src/styles/App.css";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <img src={logo} className="App-logo"></img>
      <Pokemons />
    </div>
  );
};

export default App;
