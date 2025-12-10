import mongoose from "mongoose";
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to the database successfully...");
  } catch (error) {
    console.log("failed to connect to the database...");
    throw error;
  }
}
export default connectDB;
