const Cart = require("../models/Cart");
const Product = require("../models/Product");

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

  // A. Find the product to get the REAL price (security check)
  const product = await Product.findById(productId);
  if (!product) {
    const error = new Error("Product not found");
    error.status = 404;
    throw error;
  }

  const price = product.price; // Use database price, never client price

  // B. Check if user already has a cart
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
const deleteOneCartItem = async (userId, itemId) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    const error = new Error("Cart not found");
    error.status = 404;
    throw error;
  }

  // Filter out the item to be deleted
  // Note: itemId here refers to the _id of the item INSIDE the array, not the product ID
  const itemIndex = cart.cartItems.findIndex(
    (item) => item._id.toString() === itemId
  );

  if (itemIndex > -1) {
    cart.cartItems.splice(itemIndex, 1); // Remove item
    calcTotalCartPrice(cart); // Recalc total
    await cart.save();
  } else {
    const error = new Error("Item not found in cart");
    error.status = 404;
    throw error;
  }

  return cart;
};

// 4. Clear Entire Cart
const deleteAllCartItems = async (userId) => {
  // We don't delete the document, we just empty the array and reset price
  // This keeps the _id of the cart stable
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
  cart.totalPriceAfterDiscount = undefined; // Reset discount if you have that feature
};

module.exports = {
  getAllCartItems,
  addItemToCart,
  deleteOneCartItem,
  deleteAllCartItems,
};
