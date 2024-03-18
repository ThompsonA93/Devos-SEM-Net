const express = require('express')
const Address = require('../models/addressModel')
const { getAddress, getAddresses } = require('../controllers/addressController')

const router = express.Router()

router.get('/', getAddresses)

router.get('/:id', getAddress)

module.exports = router