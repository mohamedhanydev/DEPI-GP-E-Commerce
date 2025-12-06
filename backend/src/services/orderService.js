const Order = require("../models/Order");

const createOrder = async (data) => {
  const newOrder = new Order(data);
  try {
    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (err) {
    throw err;
  }
};

module.exports = { createOrder };
