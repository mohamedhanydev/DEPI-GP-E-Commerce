const ServiceError = require("../errors/ServiceError");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const mongoose = require("mongoose");
// 1. Get Logged In User's Cart
const getAllCartItems = async (userId) => {
  // Find cart for this user and populate product details (name, img)
  const cart = await Cart.findOne({ user: userId }).populate({
    path: "cartItems.product",
    select: "name img price", // Only get fields we need
  });

  if (!cart) {
    // If no cart exists, we return an empty structure rather than error
    return { cartItems: [], totalCartPrice: 0 };
  }

  return cart;
};

// 2. Add Item to Cart
const addItemToCart = async (userId, data) => {
  const { productId, quantity } = data;
  const product = await Product.findById(productId);
  console.log(product);
  if (!product) {
    throw new ServiceError("Product not found", 404);
  }

  const price = product.price;

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    // --- CASE 1: No Cart exists, create new one ---
    cart = await Cart.create({
      user: userId,
      cartItems: [{ product: productId, price, quantity }],
      totalCartPrice: price * quantity,
    });
  } else {
    // --- CASE 2: Cart exists, check if product is already in it ---
    const itemIndex = cart.cartItems.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      // Product exists in cart, update quantity
      cart.cartItems[itemIndex].quantity += quantity;
      // Optional: Update price if product price changed in DB
      cart.cartItems[itemIndex].price = price;
    } else {
      // Product not in cart, push new item
      cart.cartItems.push({ product: productId, price, quantity });
    }

    // Recalculate Total Cart Price
    calcTotalCartPrice(cart);
    await cart.save();
  }

  return cart;
};

// 3. Remove Specific Item
const deleteOneCartItem = async (userId, productId) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    throw new ServiceError("Cart not found", 404);
  }

  // Find the index of the item with the given productId
  const itemIndex = cart.cartItems.findIndex(
    (item) => item.product.toString() === productId
  );

  if (itemIndex > -1) {
    cart.cartItems.splice(itemIndex, 1); // Remove item
    calcTotalCartPrice(cart); // Recalc total
    await cart.save();
  } else {
    throw new ServiceError("Item not found in cart", 404);
  }

  return cart;
};

// 4. Clear Entire Cart
const deleteAllCartItems = async (userId) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) return null;

  cart.cartItems = [];
  cart.totalCartPrice = 0;
  await cart.save();

  return cart;
};

// --- Helper Function ---
const calcTotalCartPrice = (cart) => {
  let totalPrice = 0;
  cart.cartItems.forEach((item) => {
    totalPrice += item.quantity * item.price;
  });
  cart.totalCartPrice = totalPrice;
  cart.totalPriceAfterDiscount = undefined;
};

module.exports = {
  getAllCartItems,
  addItemToCart,
  deleteOneCartItem,
  deleteAllCartItems,
};
