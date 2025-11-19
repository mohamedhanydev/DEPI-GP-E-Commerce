const mongoose = require("mongoose");
const dbString = process.env.DB;
async function connectDB() {
  return mongoose.connect(dbString);
}
module.exports = connectDB;
