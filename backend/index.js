require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./src/database/connect");
const productsRoute = require("./src/routes/productsRoute");
const usersRoute = require("./src/routes/usersRoute");
const cartRoute = require("./src/routes/cartRoute");
const PORT = process.env.PORT || 3700;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth/", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/cart", cartRoute);
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
