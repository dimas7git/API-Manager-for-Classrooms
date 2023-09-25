const db = require("../database/databaseconfig");

// Função que obtém todos os alunos
const getAllSalasDeAula = async () => {
  // Consulta o banco de dados para obter todos os alunos não deletados
  return (
    await db.query(
      "SELECT *FROM salasdeaula WHERE removido = false ORDER BY salasdeaulaid ASC;"
    )
  ).rows;
};

const getSalasDeAulaByID = async (salaIDPar) => {
    // Consulta o banco de dados para obter um aluno específico pelo ID
    return (
      await db.query("SELECT *FROM salasdeaula WHERE salasdeaulaid = $1 AND removido = false;",[salaIDPar])
    ).rows;
  };


  const insertSalasDeAula = async (novaSalaDeAula) => {
    let linhasAfetadas;
    let msg = "ok";
  
    try {
        linhasAfetadas = (
            await db.query("INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) VALUES ($1, $2, $3, $4) RETURNING salasdeaulaid;",
        [
        novaSalaDeAula.descricao,
        novaSalaDeAula.localizacao,
        novaSalaDeAula.capacidade,
        novaSalaDeAula.removido,
      ])).rowCount;
    } catch (error) {
      // Em caso de erro, define a mensagem de erro e o número de linhas afetadas como -1
      msg = "[mdlSalas|insertSalas] " + error.detail;
      linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
  };


  const updateSalasDeAula = async (salaDeAulaREGPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
      linhasAfetadas = (
        await db.query(
          "UPDATE salasdeaula SET " +
          "descricao = $2, " +
          "localizacao = $3, " +
          "capacidade = $4, " +
          "removido = $5 " +
          "WHERE salasdeaulaid = $1",
          [
            salaDeAulaREGPar.salasdeaulaid,
            salaDeAulaREGPar.descricao,
            salaDeAulaREGPar.localizacao,
            salaDeAulaREGPar.capacidade,
            salaDeAulaREGPar.removido,
          ]
        )
      ).rowCount;
    } catch (error) {
      msg = "[mdlSalasDeAula|UpdateSalasDeAula] " + error.detail;
      linhasAfetadas = -1;
    }
  
    return { msg, linhasAfetadas };
  };
  

  const deleteSalasDeAula = async (salaDeAulaREGPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
      // Executa a exclusão (soft delete) da sala de aula no banco de dados
      linhasAfetadas = (
        await db.query(
          "UPDATE salasdeaula SET " +
          "removido = true " +
          "WHERE salasdeaulaid = $1",
          [salaDeAulaREGPar.salasdeaulaid]
        )
      ).rowCount;
    } catch (error) {
      // Em caso de erro, define a mensagem de erro com a descrição do erro
      msg = "[mdlSalasDeAula|deleteSalasDeAula] " + error.message;
      linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
  };
  
  

  module.exports = {
    getAllSalasDeAula,
    getSalasDeAulaByID,
    insertSalasDeAula,
    updateSalasDeAula,
    deleteSalasDeAula
  };
  