pokemonRepository.getAll().forEach(function (pokemon) {
  if (pokemon.height > 2) {
    document.write(
      pokemon.name +
        " (height; " +
        pokemon.height +
        " m) - Wow, that's big!" +
        "<br>"
    );
  } else {
    document.write(pokemon.name + " (height; " + pokemon.height + ")" + "<br>");
  }
});
