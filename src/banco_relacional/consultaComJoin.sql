select e.nome, c.nome from estados e INNER JOIN cidades c on e.id = c.estado_id;
