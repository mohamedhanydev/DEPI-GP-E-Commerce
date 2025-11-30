const ordersService = require("../services/orders");

const createOrder = async (req, res) => {
  try {
    const newOrder = await ordersService.createOrder(req.user.id);
    res.status(201).send({ status: "OK", data: newOrder });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await ordersService.getOrders(req.user.id);
    res.status(200).send({ status: "OK", data: orders });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await ordersService.getOrder(req.params.id, req.user.id);
    res.status(200).send({ status: "OK", data: order });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrder,
};
