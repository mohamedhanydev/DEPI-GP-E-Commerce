require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./src/database/connect");
const products = require("./src/routes/products");
const auth = require("./src/routes/auth");
const cart = require("./src/routes/cart");
const orders = require("./src/routes/orders");
const PORT = process.env.PORT || 3500;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", products);
app.use("/api/auth", auth);
app.use("/api/cart", cart);
app.use("/api/orders", orders);

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
