const db = require("../../../config/db");

module.exports = {
  async perfis() {
    return await db("perfis").select("*");
  },
};
