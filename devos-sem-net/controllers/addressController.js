const Address = require('../models/addressModel')
const mongoose = require('mongoose')

const getAddresses = async (req, res) => {
    const addresses = await Address.find({}).sort({createdAt: -1})
    return res.status(200).json(addresses)
}

const getAddress = async(req, res) => {
    const {address} = req.params
    if(!mongoose.Types.ObjectId.isValid(address)){
        return res.status(404).json({error: 'Address not found'})
    }

    const data = await Address.findById(address)
    if(!data){
        return res.status(404).json({error: 'Data not found'})
    }

    return res.status(200).json(data)
}

module.exports = {
    getAddress,
    getAddresses
}