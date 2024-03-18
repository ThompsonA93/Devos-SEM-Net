require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");

const addressRoutes = require('./routes/addresses')

const app = express()
app.use(express.json())
app.use('/api/addresses', addressRoutes)

app.use(helmet());
// Set up rate limiter: maximum of twenty requests per minute
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
});
app.use(limiter);

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
        app.listen(process.env.PORT, () => {
            console.log('Listening on Port: ', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    }) 