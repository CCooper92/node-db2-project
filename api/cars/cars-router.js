// DO YOUR MAGIC
const express = require('express')
const router = express.Router()
const Cars = require('./cars-model.js')
const mw = require("./cars-middleware.js")

router.get('/', async (req,res,next) => {
    try{
        const cars = await Cars.getAll()
        res.status(200).json(cars)
    }catch(err) {
        next(err)
    }
})


router.get('/:id', mw.checkCarId, (req, res) => {

    res.status(200).json(req.cars)
  })

router.post('/', mw.checkCarPayload, async (req, res, next) => {
    // DO YOUR MAGIC
    try{
      const newCar = await Cars.create(req.body)
      res.status(201).json(newCar)
    }catch(err){
      next(err)
    }
  })
module.exports = router;