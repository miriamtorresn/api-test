const express = require("express");
const config = require("../config");
const user = require("../api/components/user/router");
const product = require("../api/components/product/router");
const app = express();

app.use("/user", user);
app.use("/product", product);

app.listen(config.app.port, () => {
  console.log(
    `Estoy escuchando en ${config.app.protocol}://${config.app.host}:${config.app.port}`
  );
});
