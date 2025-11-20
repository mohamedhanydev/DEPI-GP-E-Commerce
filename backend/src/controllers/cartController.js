const getAllCartItems = async (req, res) => {
  try {
    const userId = req.user.id;
    const allCartItems = await cartService.getAllCartItems(userId);
    res.status(200).send({ status: "OK", data: allCartItems });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const deleteAllCartItems = async (req, res) => {
  try {
    const userId = req.user.id;
    const deleteAllCartItems = await cartService.deleteAllCartItems(userId);
    res.status(200).send({ status: "OK", data: deleteAllCartItems });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
