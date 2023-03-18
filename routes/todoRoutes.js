const express = require("express");
const router = express.Router();
const taskController = require("../controller/TaskController");

router.route("/").get(taskController.getAllTasks).post(taskController.addTask);

router
  .route("/:taskId")
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
