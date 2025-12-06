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

const getAllOrders = async () => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email")
      .populate("products.productId", "name price");
    return orders;
  } catch (err) {
    throw err;
  }
};

const getOrderById = async (id) => {
  try {
    const order = await Order.findById(id)
      .populate("userId", "name email")
      .populate("products.productId", "name price");
    if (!order) {
      throw new Error("Order not found");
    }
    return {
      _id: order._id,
      user: order.userId,
      createdAt: order.createdAt,
      amount: order.amount,
      status: order.status,
      products: order.products.map((p) => ({
        _id: p._id,
        name: p.name,
        price: p.price,
        quantity: p.quantity,
      })),
    };
  } catch (err) {
    throw err;
  }
};

module.exports = { createOrder, getAllOrders, getOrderById };
