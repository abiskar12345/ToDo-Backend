const TodoServices = require("../services/TodoServices");

class TodoController {
  getTodoList = async (req, res) => {
    try {
      const task = await TodoServices.get();
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  add = async (req, res) => {
    try {
      const task = await TodoServices.create(req.body);
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  update = async (req, res) => {
    try {
      const data = req.body;
      const { id } = req.params;
      const task = await TodoServices.update(id, data);
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  remove = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await TodoServices.remove(id);
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await TodoServices.getById(id);
      res.status(200).json({ status: "success", data: task });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}

module.exports = new TodoController();
