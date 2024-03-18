require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const addressRoutes = require('./routes/addresses')

const app = express()
app.use(express.json())
app.use('/api/addresses', addressRoutes)
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