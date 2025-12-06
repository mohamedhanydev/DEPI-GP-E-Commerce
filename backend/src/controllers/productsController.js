const productsService = require("../services/productsService");
const { createProductSchema, updateProductSchema } = require("../validators/productValidator");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productsService.getAllProducts();
    res.status(200).send({ status: "OK", data: allProducts });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const oneProduct = await productsService.getOneProduct(req.params.id);
    res.status(200).send({ status: "OK", data: oneProduct });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const createOneProduct = async (req, res) => {
  try {
    const { error, value } = createProductSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ status: "FAILED", message: error.details[0].message });
    }
    const newProduct = await productsService.createOneProduct(value);
    res.status(201).send({ status: "OK", data: newProduct });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const updateOneProduct = async (req, res) => {
  try {
    const { error, value } = updateProductSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ status: "FAILED", message: error.details[0].message });
    }
    const updatedProduct = await productsService.updateOneProduct(
      req.params.id,
      value
    );
    res.status(200).send({ status: "OK", data: updatedProduct });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    const deletedProduct = await productsService.deleteOneProduct(
      req.params.id
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
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
