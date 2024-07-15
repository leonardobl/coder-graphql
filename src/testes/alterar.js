const db = require("../config/db");

const novoUsuario = {
  nome: "Pedro",
  email: "pedro@empresa.com.br",
  senha: "123456",
};

// db.insert(novoUsuario)
//   .into("usuarios")
//   .returning("*")
//   .then((data) => console.log(data))
//   .finally(() => db.destroy());

db.update({ nome: "Leonardo Lima" })
  .from("usuarios")
  .where({ id: 1 })
  .returning("*")
  .then((data) => console.log(data))
  .finally(() => db.destroy());
