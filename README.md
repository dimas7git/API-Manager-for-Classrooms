# Projeto da disciplina Desenvolvimento Web 3

Este é um projeto que implementa um conjunto de APIs para realizar operações de CRUD (Create, Read, Update, Delete) em um módulo de sistema acadêmico relacionado às salas de aula.

## Regras de Negócio

O projeto oferece cinco operações de CRUD na forma de APIs:

1. **GetAllSalasDeAula**: Retorna todos os campos da tabela `salasdeaula`. Apenas registros com o campo `removido` igual a false são retornados.

2. **GetSalasDeAulaByID**: Retorna todos os campos da tabela `salasdeaula` de acordo com o ID informado. Apenas o registro cujo campo `removido` seja igual a false é retornado.

3. **InsertSalasDeAula**: Insere um novo registro na tabela `salasdeaula`.

4. **UpdateSalasDeAula**: Atualiza um registro na tabela `salasdeaula` de acordo com o ID informado.

5. **DeleteSalasDeAula**: Efetua um soft delete em um registro na tabela `salasdeaula` de acordo com o ID informado. O registro não é apagado fisicamente, apenas o campo `removido` é marcado como true.

### Modelo Relacional

O modelo relacional da tabela `salasdeaula` é o seguinte:

- `salasdeaulaid` (PK): Identificador único da sala de aula.
- `descricao` (string): Descrição da sala de aula.
- `localizacao` (string): Localização da sala de aula.
- `capacidade` (integer): Capacidade máxima de alunos na sala de aula.
- `removido` (boolean): Indica se o registro foi removido (soft delete).

## Pré-requisitos


Antes de começar, verifique se você atende aos seguintes pré-requisitos:

- **Node.js**: Certifique-se de ter o Node.js instalado na sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

- **PostgreSQL**: É necessário ter o PostgreSQL instalado e configurado. Você pode baixar o PostgreSQL em [postgresql.org](https://www.postgresql.org/).

- **Extensão REST Client**: Recomendamos o uso de uma extensão REST Client para testar suas APIs. Uma extensão popular para Visual Studio Code é o "REST Client". Você pode instalá-lo a partir do [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

## Instalação

1. Clone o repositório para sua máquina local usando o seguinte comando:

```code
git clone https://github.com/dimas7git/Node_DW3_CRUD
```

2. Instale as dependências do projeto executando o seguinte comando na raiz do projeto:

```code
npm install
```

3. Criação do Banco de Dados:

Acesse o PostgreSQL usando o seguinte comando, substituindo "nome_do_seu_usuario" pelo seu nome de usuário:

```code
psql -U nome_do_seu_usuario
```

4. Crie o banco de dados "trab_crud" com o comando a seguir:

```code
CREATE DATABASE trab_crud;
```

5. Entre no banco de dados "trab_crud" recém-criado com o comando:

```code
\c trab_crud
```

6. Agora, crie a tabela "salasdeaula" e insira os dados:
  
```sql
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
```

## Para executar

  1. Abra o Projeto no Visual Studio Code, inicie um terminal e execute o comando:
  
```code
node app.js
```
  
  2. Dentro do projeto, procure a pasta chamada `tests`.
  
  4. Localize o Arquivo `testSala.rest` e clique duas vezes para abri-lo.
  
  5. Enviar Solicitação: Para enviar a solicitação, você pode clicar no botão `Send Request` localizado no canto superior esquerdo da solicitação. Alternativamente, você pode usar o atalho de teclado `Ctrl+Alt+R` para enviar a solicitação.
  
  6. Observe a Resposta: Após enviar a solicitação, a resposta da API será exibida e você poderá ver os detalhes da resposta, como status, cabeçalhos e corpo da resposta.

## Autores

[Dimas Ferreira](https://github.com/dimas7git)

[Matheus Sass](https://github.com/sassmatheus)

---
