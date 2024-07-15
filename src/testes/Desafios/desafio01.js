const db = require("../../config/db");

async function salvarUsuario(nome, email, senha) {
  if (!nome || !email || !senha) {
    throw new Error("Todos os campos são obrigatorios");
  }

  const result = await db.select("*").from("usuarios").where({ email });

  if (result) {
    return await db
      .update({ ...result, nome, email, senha })
      .from("usuarios")
      .where({ id: result.id })
      .returning("*")
      .then((data) => data)
      .catch((err) => console.log(err.sqlMessage))
      .finally(() => db.destroy());
  }

  return await db
    .insert({ nome, email, senha })
    .into("usuarios")
    .returning("*")
    .then((data) => data)
    .catch((err) => console.log(err.sqlMessage))
    .finally(() => db.destroy());
}

const usuario = await salvarUsuario();

console.log(usuario);
