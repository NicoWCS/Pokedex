const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {
  return (
    <div>
      {pokemonIndex === 3 ? alert(" pika pika !") : null}
      {pokemonList.map((elem, image) => (
        <button
          key={elem.name}
          onClick={() => {
            setPokemonIndex((pokemonIndex = image));
          }}
        >
          {elem.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
