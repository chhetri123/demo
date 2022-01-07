module.exports = (err, res) => {
  const statusCode = require("./status.errors");
  return res.status(statusCode(err)).json({
    message: err.message,
  });
};
