const todo = require("../models/todo");
class TodoService {
  constructor() {}

  async get() {
    return "todo";
  }

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

module.exports = new TodoService();
