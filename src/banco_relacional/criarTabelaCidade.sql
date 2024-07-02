create table if not exists cidades (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) not null,
  estado_id serial not null,
  area NUMERIC(10,2) not null,
  Foreign Key (estado_id) REFERENCES estados (id)
);