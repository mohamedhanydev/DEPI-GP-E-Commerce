const getAllProducts = (req, res) => {
  // return all products
  res.send("all products");
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
