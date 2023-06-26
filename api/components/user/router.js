const express = require("express");
const controller = require("./controller");
const responseUtils = require("../../../utils/response");
const copy = require("../../../copy/errors");

const router = express.Router();

const notFoundError = {
  message: copy.NOT_FOUND_ERROR_MESSAGE,
  code: 404,
};

router.get("/", async (request, response) => {
  const users = await controller.list();
  response.send({
    users,
  });
});

router.get("/:id", async (request, response) => {
  const user = await controller.get(request.params.id);
  if (user) {
    responseUtils.success(request, response, user, 200);
  } else {
    responseUtils.error(request, response, notFoundError, notFoundError.code);
  }
});

router.patch("/edit/:id", (request, response) => {
  response.send(`API PARA EDITAR EL USUARIO: ${request.params.id}`);
});

module.exports = router;
