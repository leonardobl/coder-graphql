insert into empresas (nome, cnpj) VALUES (
  'Bradesco', 39873473000139) , ('Vale' , 92048035000119), ('Cielo', 45685052000187);


alter TABLE empresas alter cnpj type VARCHAR(18);
select * from empresas;


insert into empresas_unidades (empresa_id, cidade_id, sede) VALUES (1, 1, true), (1, 2, false), (2, 1, false), (2,2, true);


select * from empresas_unidades;