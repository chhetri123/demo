{
  const path = require("path");
  require("dotenv").config({ path: path.join(__dirname, "./.env") });
  const app = require("./app");
  const connecDatabase = require("./utils/database.utils");

  const port = process.env.PORT;

  connecDatabase();

  app.listen(port, () => {
    console.log(`listening to the port 3001 `);
  });
}
