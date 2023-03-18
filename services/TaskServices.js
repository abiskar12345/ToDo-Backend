const todo = require("../model/todo");
class TaskService {
  constructor() {}

  async get() {}

  create = async (data) => {
    return todo.create(data);
  };

  update = async ({ id }) => {
    return todo.findOneAndUpdate(
      {
        _id: id,
      },

      { new: true }
    );
  };

  remove = async (id) => {
    return todo.deleteOne({
      _id: id,
    });
  };
}

module.exports = new TaskService();
