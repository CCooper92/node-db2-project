// DO YOUR MAGIC
const express = require('express')
const router = express.Router()
const Cars = require('./cars-model.js')
const mw = require("./cars-middleware.js")

router.get('/', async (req,res,next) => {
    try{
        const cars = await Cars.getAll()
        res.json(cars)
    }catch(err) {
        next(err)
    }
})

module.exports = router;