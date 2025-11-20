const productsService = require("../services/productsService");
const getAllProducts = (req, res) => {
  try {
    const allProducts = productsService.getAllProducts();
    res.status(200).send({ status: "OK", data: allProducts });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const getOneProduct = (req, res) => {
  //return specific product
  res.send("one existing product");
};
const createNewProduct = (req, res) => {
  res.send("created new product");
};
const updateOneProduct = (req, res) => {
  res.send("updated one product");
};
const deleteOneProduct = (req, res) => {
  res.send("deleted one product");
};
module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
