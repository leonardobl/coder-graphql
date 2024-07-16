const db = require("../../../config/db");

module.exports = {
  async get() {
    return await db("perfis").select("*");
  },
};
