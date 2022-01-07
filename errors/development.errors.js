module.exports = (err, res) => {
  const statusCode = require("./status.errors");
  console.log(err);
  return res.status(statusCode(err)).json({
    messgae: err.message,
    stack: err.stack,
  });
};
