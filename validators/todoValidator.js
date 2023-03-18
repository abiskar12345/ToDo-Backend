const { checkSchema } = require("express-validator");
const mongoose = require("mongoose");
const todo = require("../models/todo");
const updateValidate = checkSchema({
  id: {
    in: ["params", "query", "body"],
    errorMessage: "ID is required",
    custom: {
      options: async (value) => {
        if (value === undefined || value === "") {
          throw new Error("Id feild is required.");
        }
        value = mongoose.Types.ObjectId(value);
        let task = await todo.findById(value);

        if (!task) {
          throw new Erro("Id not valid");
        }
        return true;
      },
    },
  },
});

const addValidate = checkSchema({
  name: {
    in: ["body"],
    errorMessage: "name  is required",
    custom: {
      options: async (value) => {
        if (value === undefined || value === "") {
          throw new Error("name feild is required.");
        }
        return true;
      },
    },
  },
  shortDescriptionate: {
    in: ["body"],
    errorMessage: "shortDescription  is required",
    custom: {
      options: async (value) => {
        if (value === undefined || value === "") {
          throw new Error("shortDescription feild is required.");
        }
        return true;
      },
    },
  },
  dateTime: {
    in: ["body"],
    errorMessage: "Date  is required",
    custom: {
      options: async (value) => {
        if (value === undefined || value === "") {
          throw new Error("Date feild is required.");
        }
        if (value < Date.now()) {
          throw new Error("Date must be grater then current  Date time  ");
        }
        return true;
      },
    },
  },
});

module.exports = { addValidate, updateValidate };
