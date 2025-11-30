const cartService = require("../services/cart");

const getCart = async (req, res) => {
  try {
    const cart = await cartService.getCart(req.user.id);
    res.status(200).send({ status: "OK", data: cart });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const addOrUpdateCart = async (req, res) => {
  try {
    const cart = await cartService.addOrUpdateCart(req.user.id, req.body);
    res.status(200).send({ status: "OK", data: cart });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const cart = await cartService.removeFromCart(
      req.user.id,
      req.params.productId
    );
    res.status(200).send({ status: "OK", data: cart });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const clearCart = async (req, res) => {
  try {
    const cart = await cartService.clearCart(req.user.id);
    res.status(200).send({ status: "OK", data: cart });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

module.exports = {
  getCart,
  addOrUpdateCart,
  removeFromCart,
  clearCart,
};
