import React from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[1]} />
    </div>
  );
};

export default App;
