
create TYPE regiaoEnum as ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul');


create Table estados (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(45) NOT NULL, 
  sigla VARCHAR(2) NOT NULL, 
  regiao regiaoEnum NOT NULL,
  populacao NUMERIC(5,2) NOT NULL,
  UNIQUE(nome),
  UNIQUE(sigla)
)