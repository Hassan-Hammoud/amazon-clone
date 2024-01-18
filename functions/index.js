// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");

// App config

const app = express();

// middleware

app.use(cors({ origin: true }));

app.use(express.json());

// API Routes

app.get("/", (req, res) => res.status(200).send("Hello WorldD!"));

app.post("/payment/create", async (req, res) => {
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

// example  endPoint
// http://127.0.0.1:5001/clone-2f7d1/us-central1/api
