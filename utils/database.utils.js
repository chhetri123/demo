module.exports = () => {
  const { sequelize } = require("../models");

  sequelize
    .authenticate()
    .then(() => {
      console.log(`Database connected successfully`);
    })
    .catch((err) => {
      console.log(`Problem in connecting database ${err}`);
    });
};
