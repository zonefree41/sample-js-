let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: "Pikachu" });
console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]
