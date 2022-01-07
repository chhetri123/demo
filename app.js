const NotFound = require("./errors/NotFound.error");

{
  const expressIntialize = require("./utils/express.utils");
  const taskRoutes = require("./routes/task.routes");
  const globalErr = require("./errors/global.errors");

  const { app, readingBody } = expressIntialize;

  app.use(readingBody);
  app.use("/api/v1", taskRoutes);
  app.all("*", (req, res, next) => {
    throw new NotFound(
      `Can't find this route on this server ${req.originalUrl}`
    );
  });
  app.use(globalErr);

  module.exports = app;
}
