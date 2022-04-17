// Retornar todos produtos com o pre;o maior que 1000

const laptop = [
  {
    model: "Macbook Pro",
    price: 20000,
  },
  {
    model: "Macbook Air",
    price: 15000,
  },
  {
    model: "Hp lite",
    price: 5000,
  },
  {
    model: "Dell",
    price: 400,
  },
];

const filteredLaptop = laptop.filter((laptop) => {
  return laptop.price > 10000;
});

console.log(filteredLaptop);
