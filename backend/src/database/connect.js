const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to the database successfully.");
  } catch (error) {
    throw error;
  }
}
module.exports = connectDB;
