/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("usuarios", (table) => {
      table.increments("id").primary();
      table.string("nome").notNullable();
      table.string("email").notNullable().unique();
      table.string("senha", 60).notNullable();
      table.boolean("ativo").notNullable().defaultTo(true);
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .then(() =>
      knex("usuarios").insert([
        { nome: "João Show", email: "jshow@empresa.com.br", senha: "123" },
        {
          nome: "Jaime Lannister",
          email: "jLannister@empresa.com.br",
          senha: "1234",
        },
        {
          nome: "Gabriela T. Nunes",
          email: "gnunes@empresa.com.br",
          senha: "12345",
        },
      ])
    );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("usuarios");
};
