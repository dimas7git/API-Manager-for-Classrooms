const express = require("express");
const routerApp = express.Router();

const appSala = require("../controller/ctlSaladeAula");

routerApp.use((req, res, next) => {

  next(); 
});

routerApp.get("/", (req, res) => {
  res.send("Olá! DIMASSSS");
});

routerApp.get("/getAllSalasDeAula", appSala.getAllSalasDeAula);
routerApp.post("/getSalasDeAulaByID", appSala.getSalasDeAulaByID);
routerApp.post("/insertSalasDeAula", appSala.insertSalasDeAula);
routerApp.post("/updateSalasDeAula", appSala.updateSalasDeAula);
routerApp.post("/deleteSalasDeAula", appSala.deleteSalasDeAula);



module.exports = routerApp;
