/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("usuarios_perfis", (table) => {
      table.integer("usuario_id").unsigned();
      table.integer("perfil_id").unsigned();
      table.foreign("usuario_id").references("usuarios.id");
      table.foreign("perfil_id").references("perfis.id");
      table.primary(["usuario_id", "perfil_id"]);
    })
    .then(() =>
      knex("usuarios_perfis").insert([
        { usuario_id: 1, perfil_id: 2 },
        { usuario_id: 1, perfil_id: 3 },
        { usuario_id: 2, perfil_id: 2 },
        { usuario_id: 3, perfil_id: 1 },
      ])
    );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
