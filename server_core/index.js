import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./src/database/connect.js";
import productsRoute from "./src/routes/productsRoute.js";
import authRoute from "./src/routes/authRoute.js";
import cartRoute from "./src/routes/cartRoute.js";
import usersRoute from "./src/routes/usersRoute.js";
import stripeRoute from "./src/routes/stripeRoute.js";
import ordersRoute from "./src/routes/ordersRoute.js";
import authMiddleware from "./src/middlwares/authMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3700;
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "X-Requested-With",
    ],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
// app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/cart", authMiddleware, cartRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", authMiddleware, usersRoute);
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
export default app;
