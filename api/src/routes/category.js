const express = require('express')
const { Product, Category } = require('../db')
const { getCategories, addCategories } = require('../controllers/categories')
const router = express.Router()

router.get('/', async(req, res)=>{
    try {
        const categories = await getCategories()
        res.send(categories)
    } catch (error) {
        res.status(404).send({error:error.message})
    }
})

router.post('/', async(req, res)=>{
    const { categories } = req.body
    try {
        await addCategories(categories)
        // res.json(resPost)
        res.json('Categories add succesfull')
    } catch (error) {
        res.status(404).send({error:error.message})
    }
})

module.exports = router