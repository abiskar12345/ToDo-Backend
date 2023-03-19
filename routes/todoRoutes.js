const express = require("express");
const router = express.Router();
const TodoController = require("../controller/TodoController");
const { updateValidate, addValidate } = require("../validators/todoValidator");
const validate = require("../validators/validate");

router
  .route("/")
  .get(TodoController.getTodoList)
  .post(addValidate, validate, TodoController.add);

router
  .route("/:id")
  .patch(updateValidate, validate, TodoController.update)
  .delete(TodoController.remove)
  .get(TodoController.getById);

module.exports = router;
