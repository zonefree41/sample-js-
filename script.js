// DOM objects
const mainScreen = document.querySelector(".main-screen");
const pokeName = document.querySelector(".poke-name");
const pokeID = document.querySelector(".poke-id");
const pokeFrontImage = document.querySelector(".poke-front-image");
const pokeBackImage = document.querySelector(".poke-back-image");
const pokeTypeOne = document.querySelector(".poke-type-one");
const pokeTypeTwo = document.querySelector(".poke-type-two");
const pokeWeight = document.querySelector(".poke-weight");
const pokeHeight = document.querySelector(".poke-height");

//constants and variables
const TYPES = [
  "normal",
  "fighting",
  "flying",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

//functions

const resetScreen = () => {
  mainScreen.classList.remove("hide");
  for (const type of TYPES) {
    mainScreen.classList.remove(type);
  }
  console.log(TYPES);
};

console.log(pokeName);

fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    resetScreen();

    const dataTypes = data["types"];
    const dataFirstType = dataTypes[0];
    const dataSecondType = dataTypes[1];
    pokeTypeOne.textContent = dataFirstType["type"]["name"];
    if (dataSecondType) {
      pokeTypeTwo.textContent = dataSecondType["type"]["name"];
    } else {
      pokeTypeTwo.classList.add("hide");
      pokeTypeTwo.textContent = "";
    }
    mainScreen.classList.add(dataFirstType["type"]["name"]);

    pokeName.textContent = data["name"];
    pokeID.textContent = data["id"];
    pokeWeight.textContent = data["weight"];
    pokeHeight.textContent = data["height"];

    pokeFrontImage.src = data["sprites"]["front-defualt"] || "";
    pokeBackImage.src = data["sprites"]["back-defualt"] || "";
  });
