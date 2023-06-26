const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("API ENLISTAR PRODUCTOS");
});

router.get("/:id", (request, response) => {
  response.send(`API PARA OBTENER EL PRODUCT: ${request.params.id}`);
});

router.patch("/edit/:id", (request, response) => {
  response.send(`API PARA EDITAR EL PRODUCT: ${request.params.id}`);
});

module.exports = router;
