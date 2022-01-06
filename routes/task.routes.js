(() => {
  const taskController = require("../controllers/task.controller");
  const router = require("express").Router();

  router.use("/task", taskController);
  module.exports = router;
})();
