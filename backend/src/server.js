const express = require("express");
const DB = require("./config/db");
const PORT = process.env.PORT || 4000;
const app = express();

async function startApp() {
  try {
    await DB();
    app.use(express.json());
    app.listen(PORT, console.log(`server is listening on port: ${PORT}`));
  } catch (error) {
    console.error(`Failed to connect to db: ` + error.message);
  }
}
