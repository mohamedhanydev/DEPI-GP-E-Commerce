const User = require("../models/User");

class ServiceError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "ServiceError";
    this.status = status;
  }
}

const getCart = async (userId) => {
  try {
    const user = await User.findById(userId).populate("cart.product");
    if (!user) {
      throw new ServiceError("User not found", 404);
    }
    return user.cart;
  } catch (error) {
    throw error;
  }
};

const addOrUpdateCart = async (userId, item) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ServiceError("User not found", 404);
    }
    const cartItemIndex = user.cart.findIndex(
      (p) => p.product.toString() === item.product
    );
    if (cartItemIndex > -1) {
      user.cart[cartItemIndex].quantity = item.quantity;
    } else {
      user.cart.push(item);
    }
    await user.save();
    return user.cart;
  } catch (error) {
    throw error;
  }
};

const removeFromCart = async (userId, productId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ServiceError("User not found", 404);
    }
    user.cart = user.cart.filter((p) => p.product.toString() !== productId);
    await user.save();
    return user.cart;
  } catch (error) {
    throw error;
  }
};

const clearCart = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ServiceError("User not found", 404);
    }
    user.cart = [];
    await user.save();
    return user.cart;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCart,
  addOrUpdateCart,
  removeFromCart,
  clearCart,
};
