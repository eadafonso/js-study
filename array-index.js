const countries = [
  "Angola",
  "Nigeria",
  "Ghana",
  "Haiti",
  "Jamaica",
  "Kenya",
  "Tanzania",
  "Uganda",
  "Zambia",
  "Zimbabwe",
];

//Ex 1 - List All position Array
countries.forEach((country, index) => {
  console.log(`I am from ${country} and my index is ${index}`);
});

// Ex 2 Listar se o páis for igual à Angola
countries.forEach((country, index) => {
  if (country === "Angola") {
    console.log(`I am from ${country} and my index is ${index}`);
  }
});

// Ex 3 Listar todos paíse com caracter maior que 7

countries.forEach((country, index) => {
  if (country.length > 7) {
    console.log(`${country} character is greater than 7`);
  }
});

// Verificar se no Array existe um país com o texto "han"

countries.forEach((country, index) => {
  let containedLetters = "han";
  if (country.includes(containedLetters)) {
    console.log(`${country} contains the letter ${containedLetters}`);
  }
});

// Verificar se as primeiras letras de um páis tem o seguinte texto "Nig"

countries.forEach((country, index) => {
  let containedLetters = "Nig";
  if (country.startsWith(containedLetters)) {
    console.log(`${country} Starts with the letter ${containedLetters}`);
  }
});
