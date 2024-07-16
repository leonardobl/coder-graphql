const db = require("../../../config/db");

module.exports = {
  async perfis() {
    return await db("perfis").select("*");
  },

  async addPerfil(_, { data }) {
    const hasPerfil = await db("perfis").where({ nome: data.nome }).first();

    if (hasPerfil) {
      const result = await db("perfis")
        .where({ id: hasPerfil.id })
        .update({ ...hasPerfil, ...data })
        .returning("*");

      return result[0];
    }

    const result = await db("perfis").insert(data).returning("*");
    return result[0];
  },

  async perfilFilter(_, { data }) {
    const { id, nome } = data;

    if (!id && !nome) {
      throw new Error("Você precisa passar pelo menos um parametro");
    }

    if (id && nome) {
      const result = await db("perfis").where({ id, nome }).returning("*");
      return result[0];
    }

    if (id) {
      const result = await db("perfis").where({ id }).returning("*");
      return result[0];
    }

    if (nome) {
      const result = await db("perfis").where({ nome }).returning("*");
      return result[0];
    }
  },
};
