const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>
          Précédent
        </button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>
          Suivant
        </button>
      ) : null}
    </div>
  );
};

export default NavBar;
