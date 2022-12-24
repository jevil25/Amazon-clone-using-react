const functions = require("firebase-functions");
const express = require("express");
const cors = require("express");
const stripe = require("stripe")("pk_test_51MIUU7SA5ozMyR3ny8GBQJLWm5B8SsEX9J3ebmJ0qatfjkIK25eNIAwy2gRJS2EIqob6tUnc5FzJTDEgcQYG51gk00rfdSDHZf");

//API

//-App Config
const app=express();

// - Middlewares
app.use(cors({ origin: trur }))
app.use(express.json())

// - API routes
app.get('/',(req,res) => {
    res.status(200).send("hello world");
})

// - Listen command
exports.api = functions.https.onRequest(app);