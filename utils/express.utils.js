const express = require("express");
module.exports = {
  app: express(),
  router: express.Router(),
  readingBody: express.json(),
};
