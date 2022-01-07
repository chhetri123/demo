module.exports = (message, res, data) => {
  const { StatusCodes } = require("http-status-codes");

  const dataMsg = require("./message.providers");

  res.status(StatusCodes.CREATED || 200).json({
    message: dataMsg.dataCreateMessage(message),
    data,
  });
};
