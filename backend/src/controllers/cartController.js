const cartServices = require("../services/cartService");
const getAllCartItems = async (req, res) => {
  try {
    const allProducts = await cartService.getAllCartItems(req.user.id);
    res.status(200).send({ status: "OK", data: allProducts });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const addItemToCart = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await cartService.addItemToCart(req.user.id, data);
    res.status(200).send({ status: "OK", data: newProduct });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const deleteOneCartItem = async (req, res) => {
  try {
    const deletedProduct = await cartService.deleteOneCartItem(
      req.user.id,
      req.body.itemId
    );
    res.status(200).send({ status: "OK", data: deletedProduct });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const deleteAllCartItems = async (req, res) => {
  try {
    await cartService.deleteAllCartItems(req.user.id);
    res.status(200).send({ status: "OK", message: "deleted all cart items" });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
module.exports = {
  getAllCartItems,
  addItemToCart,
  deleteOneCartItem,
  deleteAllCartItems,
};
