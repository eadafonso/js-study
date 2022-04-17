// Retornar os modelos de todos produtos

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

const getLaptopModel = laptop.map((item) => {
  return item.model;
});

console.log(getLaptopModel);
