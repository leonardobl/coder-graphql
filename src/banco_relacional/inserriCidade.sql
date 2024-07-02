select * from estados;
select * from cidades;
update cidades set nome = 'Campinas' WHERE id = 1;

-- delete from cidades WHERE id = 3;



insert into cidades (nome, area, estado_id) values ('Campinas', 795, 26);
insert into cidades (nome, area, estado_id) values ('Niterói', 133.9, 20);
insert into cidades (nome, area, estado_id) values ('Caruaru', 920.6, (select id from estados WHERE sigla = 'PE'));

insert into cidades (nome, area, estado_id) values ('Juazeiro do norte', 248.2, (select id from estados WHERE sigla = 'CE'));