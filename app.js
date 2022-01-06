{
  const expressIntialize = require("./utils/express.utils");
  const taskRoutes = require("./routes/task.routes");

  const { app } = expressIntialize;

  app.use("/api/v1", taskRoutes);
  module.exports = app;
}
