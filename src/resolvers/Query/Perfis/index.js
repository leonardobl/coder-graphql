const db = require("../../../config/db");

module.exports = {
  async perfis() {
    return await db("perfis").select("*");
  },

  async addPerfil(_, perfil) {
    console.log(perfil);
    return perfil.data;
    const hasPerfil = await db("perfis").where({ nome: perfil.nome });
  },
};
