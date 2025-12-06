const orderService = require("../services/orderService");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

module.exports = {
  createOrder,
  createOrderFromSession,
};
