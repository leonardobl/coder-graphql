const db = require("../../config/db");

async function salvarUsuario(nome, email, senha) {
  if (!nome || !email || !senha) {
    throw new Error("Todos os campos são obrigatorios");
  }

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
}

async function salvarPerfil(nome, rotulo) {
  if (!nome || !rotulo) {
    throw new Error("Campos obrigatorios");
  }

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
}

async function adicionarPerfis(usuario, perfis) {
  for (let perfil of perfis) {
    const hasData = await db
      .select("*")
      .from("usuarios_perfis")
      .where({ usuario_id: usuario.id, perfil_id: perfil.id })
      .first();

    if (!hasData) {
      await db
        .insert({ usuario_id: usuario.id, perfil_id: perfil.id })
        .into("usuarios_perfis")
        .returning("*");
    }
  }
}

(async () => {
  try {
    const usuario = await salvarUsuario("Ana", "ana@empresa.com.br", "123456");
    const perfilA = await salvarPerfil("rh", "Pessoal");
    const perfilB = await salvarPerfil("fin", "Financeiro");

    await adicionarPerfis(usuario, [perfilA, perfilB]);
  } catch (error) {
    console.log(error);
  } finally {
    db.destroy();
  }
})();
