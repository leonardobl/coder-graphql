const db = require("../config/db");

// const novoPerfil = {
//   nome: "visitante",
//   rotulo: "Visitante",
// };

// db("perfis")
//   .insert(novoPerfil)
//   .returning("*")
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

const perfilSU = {
  nome: "root - " + new Date().getTime(),
  rotulo: "Super Usuário",
};

db.insert(perfilSU)
  .into("perfis")
  .returning("*")
  .then((res) => console.log(res))
  .catch((err) => console.log(err.sqlMessage))
  .finally(() => db.destroy());
