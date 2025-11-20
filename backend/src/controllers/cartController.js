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
const addCartItem = async (req, res) => {
  try {
    const userId = req.user.id,
      { productId, quantity } = req.body;
    const addedCartItem = await cartService.addCartItem(
      userId,
      productId,
      quantity
    );
    res.status(200).send({ status: "OK", data: addedCartItem });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const updateCartItemQuantity = async (req, res) => {
  try {
    const userId = req.user.id,
      newQuantity = req.body.quantity,
      productId = req.body.productId;
    const updatedCartItemQuantity = await cartService.updateCartItemQuantity(
      userId,
      productId,
      newQuantity
    );
    res.status(200).send({ status: "OK", data: newQuantity });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
const deleteOneCartItem = async (req, res) => {
  try {
    const userId = req.user.id,
      productId = req.body.productId;
    const deletedCartItem = await cartService.deleteOneCartItem(
      userId,
      productId
    );
    res.status(200).send({ status: "OK", data: deletedCartItem });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};
