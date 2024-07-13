create table prefeitos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(240) NOT NULL,
  cidade_id INTEGER UNIQUE,
  Foreign Key (cidade_id) REFERENCES cidades (id)
)