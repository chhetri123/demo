module.exports = () => {
  const { router } = require("../utils/express.utils");
  const { Task } = require("../models");

  createTask: router.post("/", this.createTaskController);
  createTaskController: async (req, res, next) => {};

  getTask: router.get("/", this.getTaskController);
  getTaskController: (req, res, next) => {};

  getOneTask: router.get("/:id", this.getOneTaskController);
  getOneTaskController: () => {};
};
