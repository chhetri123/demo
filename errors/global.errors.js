module.exports = (error, req, res, next) => {
  const developmentError = require("./development.errors");
  const productionError = require("./production.errors");

  const nodeEnvironment = process.env.NODE_ENV;

  error.statusCode = 400;

  if (nodeEnvironment === "development") {
    developmentError(error, res);
  } else if (nodeEnvironment === "production") {
    productionError(error, res);
  }
};
