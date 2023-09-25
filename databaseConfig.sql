CREATE TABLE salasdeaula (
  salasdeaulaid SERIAL PRIMARY KEY,
  descricao VARCHAR(255) NOT NULL,
  localizacao VARCHAR(255) NOT NULL,
  capacidade INTEGER NOT NULL,
  removido BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido)
VALUES ('Sala 101', 'Prédio A', 30, false);

INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido)
VALUES ('Sala 201', 'Prédio A', 25, false);

INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido)
VALUES ('Sala 301', 'Prédio B', 40, false);
