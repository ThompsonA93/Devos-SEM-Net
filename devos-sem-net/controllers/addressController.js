const Address = require('../models/addressModel')
const mongoose = require('mongoose')

const getAddresses = async (req, res) => {
    const addresses = await Address.find({}).sort({createdAt: -1})
    return res.status(200).json(addresses)
}

const getAddress = async(req, res) => {
    const {id} = req.params
    const data = await Address.find({address: id})
    if(!data){
        return res.status(404).json({error: 'Data not found'})
    }

    return res.status(200).json(data)
}

module.exports = {
    getAddress,
    getAddresses
}