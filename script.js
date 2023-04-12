let pokemonRepository = (function () {
  let pokemonList = [
    {
      Name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
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
