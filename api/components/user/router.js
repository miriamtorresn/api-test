const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("API ENLISTAR USUARIOS");
});

router.get("/:id", (request, response) => {
  response.send(`API PARA OBTENER EL USUARIO: ${request.params.id}`);
});

router.patch("/edit/:id", (request, response) => {
  response.send(`API PARA EDITAR EL USUARIO: ${request.params.id}`);
});

module.exports = router;
