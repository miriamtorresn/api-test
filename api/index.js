const express = require("express");
const config = require("../config");
const app = express();

app.get("/", (request, response) => {
  response.send("Hola este es mi server cargando la path /");
});

app.get("/hola", (request, response) => {
  response.send("Hola!");
});

app.listen(config.app.port, () => {
  console.log(
    `Estoy escuchando en ${config.app.protocol}://${config.app.host}:${config.app.port}`
  );
});
