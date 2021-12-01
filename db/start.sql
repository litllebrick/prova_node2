create table team(
  id serial primary key,
  nome varchar(15) not null,
  estado varchar(100) not null,
  sites varchar(100) not null
);

INSERT INTO team (nome, estado, sites)
VALUES ('Corinthians','São Paulo','www.corinthians.com.br'); 

INSERT INTO team (nome, estado, sites)
VALUES ('Flamengo','Rio de Janeiro','www.flamengo.com.br'); 