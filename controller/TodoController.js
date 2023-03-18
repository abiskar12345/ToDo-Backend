const TodoServices = require("../services/TodoServices");

class TodoController {
  getTodoList = async (req, res) => {
    try {
      const task = await TodoServices.get();
      res.status(200).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  add = async (req, res) => {
    try {
      const task = await TodoServices.create(req.body);
      res.status(200).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  update = async (req, res) => {
    try {
      const data = req.body;
      const task = await TodoServices.update(data);
      res.status(200).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  remove = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await TodoServices.remove(id);
      res.status(200).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}

module.exports = new TodoController();
