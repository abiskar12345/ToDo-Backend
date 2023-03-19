const { ObjectId } = require("mongoose");
const todo = require("../models/todo");

class TodoService {
  constructor() {}

  async get() {
    return todo.find();
  }

  create = async (data) => {
    return todo.create(data);
  };

  update = async (id, data) => {
    return todo.findOneAndUpdate(
      {
        _id: id,
      },
      data,

      { new: true }
    );
  };

  remove = async (id) => {
    return todo.deleteOne({
      _id: id,
    });
  };

  getById = async (id) => {
    return todo.findById(id);
  };
}

module.exports = new TodoService();
