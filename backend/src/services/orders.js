const Order = require("../models/Order");
const User = require("../models/User");

class ServiceError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "ServiceError";
    this.status = status;
  }
}

const createOrder = async (userId) => {
  try {
    const user = await User.findById(userId).populate("cart.product");
    if (!user) {
      throw new ServiceError("User not found", 404);
    }
    if (user.cart.length === 0) {
      throw new ServiceError("Cart is empty", 400);
    }
    let total = 0;
    const orderItems = user.cart.map((item) => {
      total += item.product.newPrice * item.quantity;
      return {
        product: item.product._id,
        quantity: item.quantity,
      };
    });
    const newOrder = new Order({
      user: userId,
      items: orderItems,
      total,
    });
    await newOrder.save();
    user.cart = [];
    await user.save();
    return newOrder;
  } catch (error) {
    throw error;
  }
};

const getOrders = async (userId) => {
  try {
    const orders = await Order.find({ user: userId }).populate(
      "items.product"
    );
    return orders;
  } catch (error) {
    throw error;
  }
};

const getOrder = async (orderId, userId) => {
  try {
    const order = await Order.findOne({ _id: orderId, user: userId }).populate(
      "items.product"
    );
    if (!order) {
      throw new ServiceError("Order not found", 404);
    }
    return order;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrder,
};
