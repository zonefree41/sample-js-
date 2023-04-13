let pokemonRepository = (function () {
  let pokemonList = [
    {
      Name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      Name: "Charizard",
      height: 0.7,
      types: ["fire", "flying"],
    },
  ];

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
  };
})();

console.log(pokemonRepository);
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon) {
  if (pokemon.height > 2) {
    document.write(
      pokemon.name +
        " (height; " +
        pokemon.height +
        " m) - wow that's big!" +
        "<br>"
    );
  } else {
    document.write(pokemon.name + " (height; " + pokemon.height + ")" + "<br>");
  }
});
