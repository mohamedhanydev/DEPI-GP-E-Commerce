const orderService = require("../services/orderService");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json({ message: "retrieved orders successfully", data: orders });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Error creating order", error: err });
  }
};

const createOrderFromSession = async (req, res) => {
  try {
    const { sessionId } = req.body;
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    if (session.payment_status === "paid") {
      const orderData = {
        userId: session.metadata.userId,
        products: JSON.parse(session.metadata.cart).map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        amount: session.amount_total / 100,
        address: session.customer_details.address,
        status: "paid",
      };
      const order = await orderService.createOrder(orderData);
      res.status(201).json(order);
    } else {
      res.status(400).json({ message: "Payment not successful" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating order from session", error: err });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    res.status(200).json({ message: "retrieved order successfully", data: order });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  createOrderFromSession,
  getOrderById,
};
