let pokemonList = [
  { name: "Bulbasaur", height: 0.7, types: ["grass", "poison"] },

  { name: "Ditto", height: 0.3, types: ["normal"] },

  { name: "Charmander", height: 0.6, types: "water" },
];

/* Above lists the pokemon inside an array titled "pokemonList". The array contains objects with
characteristics for each pokemon.*/

let pokemonBig = " - wow, that is a big pokemon.";

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 1.7) {
    document.write(
      pokemonList[i].name +
        " (height: " +
        pokemonList[i].height +
        ")" +
        pokemonLarge +
        " <br>"
    );
  } else {
    document.write(
      pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>"
    );
  }
}

/*this for loop has an if...else statement that identifies any pokemon greater than or equal to 1.7m.*/
