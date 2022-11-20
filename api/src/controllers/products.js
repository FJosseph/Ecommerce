const { Product, Category } = require('../db')
const express = require('express')
const { Op } = require('sequelize')

const getProduct = async()=>{
    const allProducts = await Product.findAll({
        include: Category
    })
    return allProducts
}

const getProductByQuery = async(name)=>{
    const products = await Product.findAll({
        where: {
            name: {
                [Op.iRegexp]: `${name}`
            }
        }
    },{
        include: Category
    })
    return products
}

const addProduct = async(name, description, stock, images, price, categories)=>{
    const add = await Product.create({
        name,
        description,
        stock,
        images,
        price
    })
    let allCategories = await Category.findAll()
    allCategories = await allCategories.map(x=>x.dataValues)
    const idCategories = categories.map(c=>allCategories.filter(x=> x.name === c)[0].id)
    const nameCategories = categories.map(c=>allCategories.filter(x=> x.name === c)[0].name)
    await add.addCategories(idCategories)
    return {
        ...add.dataValues,
        categories: nameCategories.map(x=>{return {name: x}}) 
    }
}

module.exports = {
    getProduct,
    addProduct,
    getProductByQuery
}