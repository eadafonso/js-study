let user = {
  name: "Jannet",
  age: 30,
  email: "jannet@gmail.com",
  location: "Nigeria",
  blogs: ["human resource management", "tech for the non-tech savvy"],

  // Objectos podem receber funções como métodos
  login: function () {
    console.log("the user is logged in");
  },
};

user.login();
