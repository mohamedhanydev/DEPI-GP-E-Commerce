const getAllCartItems = async (req, res) => {
  try {
    const allCartItems = await cartService.getAllCartItems();
    res.status(200).send({ status: "OK", data: allCartItems });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
