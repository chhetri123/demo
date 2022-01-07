{
  const expressIntialize = require("./utils/express.utils");
  const taskRoutes = require("./routes/task.routes");
  const globalErr = require("./errors/global.errors");

  const { app, readingBody } = expressIntialize;

  app.use(readingBody);
  app.use("/api/v1", taskRoutes);
  // app.all("*", (req, res, next) => {

  // });
  app.use(globalErr);

  module.exports = app;
}
