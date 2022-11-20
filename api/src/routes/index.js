const express = require('express')
const router = express.Router()
//Importar rutas
const routeProduct = require('./product')
const routeCategories = require('./category')

router.use('/products', routeProduct)
router.use('/categories', routeCategories)

module.exports = router