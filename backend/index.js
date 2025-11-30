require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./database/connect");
const products = require("./routes/products");
const PORT = process.env.PORT || 3500;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", products);

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Started listening to port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database or start server:");
    process.exit(1);
  }
}

startServer();
