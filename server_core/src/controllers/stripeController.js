import stripe from "stripe";
const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({
      error: "Stripe secret key not configured.",
      details: "Please set the STRIPE_SECRET_KEY in your .env file.",
    });
  }

  if (!req.user || !req.user.id) {
    return res.status(401).json({
      error: "User not authenticated.",
      details: "The user is not properly authenticated to perform this action.",
    });
  }
  const { cartItems, customer } = req.body;
  console.log(cartItems, customer);
  const userId = req.user.id;

  const line_items = cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item?.product?.name,
        },
        unit_amount: Math.ceil(item?.price || item?.product?.price),
      },
      quantity: item?.quantity || item?.product?.quantity,
    };
  });

  try {
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/checkout-cancel`,
      customer_email: customer.email,
      metadata: {
        userId: userId.toString(),
        cart: JSON.stringify(cartItems),
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe session:", error.message);
    res
      .status(500)
      .json({ error: "Failed to create Stripe session", details: error });
  }
};
