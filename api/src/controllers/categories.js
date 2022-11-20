const { Product, Category } = require('../db')
const express = require('express')

const getCategories = async()=>{
    const allCategories = await Category.findAll()
    return allCategories
}

const addCategories = async(category)=>{
    if(Array.isArray(category)){
        const addArray = await category.map(x=>Category.findOrCreate({where:{name:x}}))
        return addArray
    }
    const add = await Category.findOrCreate({
        where: {
            name: category
        }
    })
    return add
}

module.exports = {
    getCategories,
    addCategories
}