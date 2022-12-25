const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MIUU7SA5ozMyR3nNyeUNeF4byVMJDBuACa42TmR8Z25BQA1h3txnJ2IpmeDcSaAWxm9QWFaRKYxGySFbqfABnMC00xiMS64Op");

//API

//-App Config
const app=express();

// - Middlewares
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5001');
//     // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     // res.header('Access-Control-Allow-Headers', 'Content-Type');

//     next();
// }
app.use(cors({origin:true}))
app.use(express.json())

// - API routes
app.get('/',(req,res) => {
    res.status(200).send("hello world");
})

app.post('/payment/create', async(req,res) => {
    const total=req.query.total;

    console.log('Payment Request Received BOOM!! for this amount >>> ',total);
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency: "usd"
    });

    res.status(200).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);