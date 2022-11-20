const express = require('express')
const router = express.Router()
const { getProduct, addProduct, getProductByQuery } = require('../controllers/products')

router.get('/', async(req, res)=>{
    const { name } = req.query
    try {
        if(name){
            const productByName = await getProductByQuery(name)
            return res.send(productByName)
        }
        const product = await getProduct()
        res.send(product)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})

router.post('/', async(req, res)=>{
    const { name, description, stock, images, price, categories } = req.body
    if(!name || !description || !stock || !images || !categories.length ) return res.status(404).send('Son requeridos más valores')
    try {
        const response = await addProduct(name, description, stock, images, price, categories)
        res.send(response)
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})

module.exports = router