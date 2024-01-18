const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App config

const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes

app.get("/", (req, res) => res.status(200).send("Hello WorldD!"));

app.post("/payments/create", async (req, res) => {
  // create session
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command

exports.api = functions.https.onRequest(app);
