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
  try {
    const oneProduct = productsService.getOneProduct(req.params.productId);
    res.status(200).send({ status: "OK", data: oneProduct });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const createNewProduct = (req, res) => {
  try {
    // TODO: validate the data before delegating the creation of new product
    const productData = req.body;
    const newProduct = productsService.createNewProduct(productData);
    res.status(200).send({ status: "OK", data: newProduct });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const updateOneProduct = (req, res) => {
  try {
    const dataToBeUpdated = req.body;
    const updatedProduct = productsService.updateOneProduct(
      req.params.productId,
      dataToBeUpdated
    );
    res.status(200).send({ status: "OK", data: updatedProduct });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const deleteOneProduct = (req, res) => {
  try {
    const deletedProduct = productsService.deleteOneProduct(
      req.params.productId
    );
    res.status(200).send({ status: "OK", data: deletedProduct });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
