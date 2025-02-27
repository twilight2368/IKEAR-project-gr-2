const {
  createOrder,
  getAllOrders,
  getAllOrdersByStore,
  getAllOrdersByUser,
  updateOrderStatus,
  getOneOrder,
} = require("../controllers/order.controller");
const appConfig = require("../configs/app.config");
const stripe = require("stripe")(appConfig.stripe.private_key);

const express = require("express");
const router = express.Router();

router.get("/orders", getAllOrders);
router.get("/orders/:id", getOneOrder);
router.put("/orders/:id", updateOrderStatus);
router.get("/orders/store/:id", getAllOrdersByStore);
router.get("/orders/user/:id", getAllOrdersByUser);
router.post("/order", createOrder);

//* -------------------------------------------------------
router.post("/payment", async (req, res) => {
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
});

module.exports = router;
