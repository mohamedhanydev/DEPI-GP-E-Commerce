require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./src/database/connect");
const products = require("./src/routes/products");
const users = require("./src/routes/users");
const PORT = process.env.PORT || 3700;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth/", users);
app.use("/api/products", products);

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Started listening to port: ${PORT}`);
    });
  } catch (error) {
    process.exit(1);
  }
}

startServer();
