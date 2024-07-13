create table empresas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cnpj NUMERIC NOT NULL UNIQUE
);


create table empresas_unidades (
  empresa_id INTEGER NOT null,
  cidade_id INTEGER NOT null,
  sede BOOLEAN NOT null,
  PRIMARY KEY (empresa_id, cidade_id)
);


