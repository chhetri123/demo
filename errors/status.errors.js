module.exports = (err) => {
  const { StatusCodes } = require("http-status-codes");
  const statusCode =
    err.statusCode ||
    StatusCodes.BAD_REQUEST ||
    StatusCodes.INTERNAL_SERVER_ERROR ||
    StatusCodes.NOT_FOUND;
  return statusCode;
};
