const appConfig = require("../configs/app.config");
const stripe = require("stripe")(appConfig.stripe.private_key);

const create_intent_payment = async (req, res) => {
  try {
    const { amount } = req.body;

    // Validate the incoming request
    if (!amount) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    //console.log(paymentIntent);

    return res
      .status(201)
      .json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    next(error);
  }
};

module.exports = { create_intent_payment };
