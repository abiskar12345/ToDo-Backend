const TaskServices = require("../services/TaskServices");

class TaskController {
  getTasks = async (req, res) => {
    try {
      const task = await TaskServices.get();
      res.status(200).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  add = async (req, res) => {
    try {
      const task = await TaskServices.create(req.body);
      res.status(200).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  updateTasks = async (req, res) => {
    try {
      const data = req.body;
      const task = await TaskServices.update(data);
      res.status(200).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  remove = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await TaskServices.remove(id);
      res.status(200).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}

module.exports = new TaskController();
