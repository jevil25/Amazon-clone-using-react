const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("pk_test_51MIUU7SA5ozMyR3ny8GBQJLWm5B8SsEX9J3ebmJ0qatfjkIK25eNIAwy2gRJS2EIqob6tUnc5FzJTDEgcQYG51gk00rfdSDHZf");

//API

//-App Config
const app=express();

// - Middlewares
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    es.header('Access-Control-Allow-Origin', 'http://localhost:5001');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(cors())
app.use(allowCrossDomain);
app.use(express.json())

// - API routes
app.get('/',(req,res) => {
    res.status(200).send("hello world");
})

app.post('/payment/create', async(req,res) => {
    const total=req.query.total;

    console.log('Payment Request Received BOOM!! for this amount >>> ',total);
    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency: "usd"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);