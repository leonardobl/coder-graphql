const db = require("../../config/db");

async function salvarUsuario(nome, email, senha) {
  if (!nome || !email || !senha) {
    throw new Error("Todos os campos são obrigatorios");
  }

  try {
    const result = await db
      .select("*")
      .from("usuarios")
      .where({ email })
      .returning("*")
      .first();

    if (result) {
      return await db
        .update({ ...result, nome, email, senha })
        .from("usuarios")
        .where({ id: result.id })
        .returning("*")
        .then((data) => data[0]);
    }

    return await db
      .insert({ nome, email, senha })
      .into("usuarios")
      .returning("*")
      .then((data) => data[0]);
  } catch (error) {
    console.log(error);
  }
}

async function salvarPerfil(nome, rotulo) {
  if (!nome || !rotulo) {
    throw new Error("Campos obrigatorios");
  }

  try {
    const oldValue = await await db("perfis")
      .select("*")
      .where({ nome })
      .returning("*")
      .first();

    if (oldValue) {
      return await db
        .update({ ...oldValue, nome, rotulo })
        .from("perfis")
        .where({ nome: oldValue.nome })
        .returning("*")
        .then((data) => data[0]);
    }

    return await db
      .insert({ nome, rotulo })
      .into("perfis")
      .returning("*")
      .then((data) => data[0]);
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  try {
    const result1 = await salvarPerfil("rh", "Pessoal");
    const result2 = await salvarPerfil("fin", "Financeiro");
    console.log(result1);
    console.log(result2);
  } catch (error) {
    console.log(error);
  } finally {
    db.destroy();
  }
})();
