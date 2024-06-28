select * from estados;


select nome, sigla from estados;


select sigla, nome as "Nome do estado" from estados WHERE regiao = 'Sul';


select nome, regiao from estados WHERE populacao >= 10 ORDER BY populacao desc;