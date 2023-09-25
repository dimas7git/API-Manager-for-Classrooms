const mdlSala = require("../model/mdlSaladeAula")

const getAllSalasDeAula = (req, res) =>
(async () =>{
    let registro = await mdlSala.getAllSalasDeAula();
    res.json({status: "ok", registro: registro});
})();


const getSalasDeAulaByID = (req, res) =>
(async () =>{
    const salaID = parseInt(req.body.salasdeaulaid);
    let registro = await mdlSala.getSalasDeAulaByID(salaID);
    res.json({status: "ok", registro: registro});
})();

const insertSalasDeAula = (request, res) =>
  (async () => {
    
    const salaREG = request.body;
    
    let { msg, linhasAfetadas } = await mdlSala.insertSalasDeAula(salaREG);

    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  const updateSalasDeAula = (request, res) =>
  (async () => {
    const salaREG = request.body;
    let  { msg, linhasAfetadas } = await mdlSala.updateSalasDeAula(salaREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();
  
  const deleteSalasDeAula = (request, res) =>
  (async () => {
    const salaREG = request.body;
    let { msg, linhasAfetadas } = await mdlSala.deleteSalasDeAula(salaREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  module.exports = {
    getAllSalasDeAula,
    getSalasDeAulaByID,
    insertSalasDeAula,
    updateSalasDeAula,
    deleteSalasDeAula
  };
  