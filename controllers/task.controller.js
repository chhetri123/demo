(() => {
  const { router } = require("../utils/express.utils");
  const { Task } = require("../models");
  const { RequestedDataProvider, createSuccessRes } = require("../providers");

  const createTaskController = async (req, res, next) => {
    try {
      const tasksData = new RequestedDataProvider(req.body);

      const task = await Task.create({
        name: tasksData.name,
        descricption: tasksData.description,
        completed: tasksData.completed,
      });

      createSuccessRes("Task", res, task);
    } catch (error) {
      next(error);
    }
  };
  router.post("/", createTaskController);

  //   getTask: router.get("/", this.getTaskController);
  //   getTaskController: (req, res, next) => {};

  //   getOneTask: router.get("/:id", this.getOneTaskController);
  //   getOneTaskController: () => {};

  module.exports = router;
})();
