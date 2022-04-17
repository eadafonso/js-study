//Find array method

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

const findLaptop = laptop.find((laptop) => {
  return laptop.model === "Macbook Pro";
});

console.log(findLaptop);
