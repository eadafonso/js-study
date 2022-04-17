const food = [
  {
    name: "pizza",
    price: 100,
  },
  {
    name: "burger",
    price: 200,
  },
  {
    name: "pasta",
    price: 300,
  },
  {
    name: "rice",
    price: 400,
  },
  {
    name: "chicken",
    price: 500,
  },
];

const total = food.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);
