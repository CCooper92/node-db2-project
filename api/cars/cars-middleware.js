const Cars = require("./cars-model.js")

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const cars = await Cars.getById(req.params.id)
    if(cars){
      req.cars = cars
      next()
    }else{
      res.status(404).json({message: "car with this id does not exist"})
    }
  }catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const {vin, make, model, mileage} = req.body
  if(vin && make && model && mileage){
    next()
  }else{
    res.status(400).json({message: "required text"})
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  // checkVinNumberUnique,
  // checkVinNumberValid,
}
