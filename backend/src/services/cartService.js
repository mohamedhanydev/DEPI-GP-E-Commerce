const ServiceError = require("../errors/ServiceError");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const mongoose = require("mongoose");
// 1. Get Logged In User's Cart
const getAllCartItems = async (userId) => {
  // Find cart for this user and populate product details (name, img)
  const cart = await Cart.findOne({ user: userId }).populate({
    path: "cartItems.product",
    select: "name imageUrl price",
  });

  if (!cart) {
    // If no cart exists, we return an empty structure rather than error
    return { cartItems: [], totalCartPrice: 0 };
  }

  return cart;
};

// 2. Add Item to Cart
const calcTotalCartPrice = (cart) => {
  cart.totalCartPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  cart.totalPriceAfterDiscount = undefined; // Reset discount
};

const addItemToCart = async (userId, data) => {
  const { productId, quantity } = data;
  const product = await Product.findById(productId);
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
    });
  } else {
    // --- CASE 2: Cart exists, check if product is already in it ---
    const itemIndex = cart.cartItems.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      // Product exists in cart, update quantity
      cart.cartItems[itemIndex].quantity += quantity;
    } else {
      // Product not in cart, push new item
      cart.cartItems.push({ product: productId, price, quantity });
    }
  }

  // Recalculate Total Cart Price
  calcTotalCartPrice(cart);
  await cart.save();

  // Populate product details for the returned cart
  await cart.populate({
    path: "cartItems.product",
    select: "name imageUrl price",
  });

  return cart;
};

// 3. Remove Specific Item
const deleteOneCartItem = async (userId, productId) => {
  const cart = await Cart.findOneAndUpdate(
    { user: userId },
    { $pull: { cartItems: { product: productId } } },
    { new: true }
  ).populate({
    path: "cartItems.product",
    select: "name imageUrl price",
  });

  if (!cart) {
    throw new ServiceError("Cart not found or item not in cart", 404);
  }

  calcTotalCartPrice(cart);
  await cart.save();

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

// 5. Increase Item Quantity
const increaseItemInCart = async (userId, productId) => {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) {
    throw new ServiceError("Cart not found", 404);
  }

  const itemIndex = cart.cartItems.findIndex(
    (item) => item.product.toString() === productId
  );

  if (itemIndex > -1) {
    cart.cartItems[itemIndex].quantity += 1;
    calcTotalCartPrice(cart);
    await cart.save();
  } else {
    throw new ServiceError("Item not found in cart", 404);
  }

  // Populate product details for the returned cart
  await cart.populate({
    path: "cartItems.product",
    select: "name imageUrl price",
  });

  return cart;
};

// 6. Decrease Item Quantity
// 6. Decrease Item Quantity
const decreaseItemInCart = async (userId, productId) => {
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    throw new ServiceError("Cart not found", 404);
  }

  const itemIndex = cart.cartItems.findIndex(
    (item) => item.product.toString() === productId
  );

  if (itemIndex > -1) {
    if (cart.cartItems[itemIndex].quantity > 1) {
      cart.cartItems[itemIndex].quantity -= 1;
    } else {
      // If quantity is 1, remove the item
      cart.cartItems.splice(itemIndex, 1);
    }
    calcTotalCartPrice(cart);
    await cart.save();

    // Re-populate to get the latest product details
    cart = await cart.populate({
      path: "cartItems.product",
      select: "name imageUrl price",
    });
  } else {
    throw new ServiceError("Item not found in cart", 404);
  }

  return cart;
};

module.exports = {
  getAllCartItems,
  addItemToCart,
  deleteOneCartItem,
  deleteAllCartItems,
  increaseItemInCart,
  decreaseItemInCart,
};
