require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./src/database/connect");
const productsRoute = require("./src/routes/productsRoute");
const authRoute = require("./src/routes/authRoute");
const cartRoute = require("./src/routes/cartRoute");
const usersRoute = require("./src/routes/usersRoute");
const stripeRoute = require("./src/routes/stripeRoute");
const ordersRoute = require("./src/routes/ordersRoute");
const authMiddleware = require("./src/middlwares/authMiddleware");
const PORT = process.env.PORT || 3700;
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/cart", authMiddleware, cartRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/stripe", stripeRoute);
app.use("/api/orders", ordersRoute);
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
