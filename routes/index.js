var express = require("express");
const apiRoutes = function (app) {
  app.use("/", express.static(__dirname + "/../public"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/todo", require("./todoRoutes"));

  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });
};
module.exports = apiRoutes;
