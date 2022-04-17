let user = {
  name: "Edvaldo",
  age: 30,
  email: "edvaldo@gmail.com",
  location: "Angola",
  blogs: ["human resource management", "tech for the non-tech savvy"],
};

// Alterar o Valor de alguma propiedade do objecto
user.age = 23;

// Outra forma de alterar a propiedade d eum objecto
user["name"] = "Lanre";

console.log(user.age);
