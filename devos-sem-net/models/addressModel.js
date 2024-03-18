const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Address', addressSchema)