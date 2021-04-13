const Cars = require("./cars-model.js")

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const car = await Cars.getById(req.params.id)
    if(car){
      req.car = car
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

exports = {
  checkCarId,
  checkCarPayload,
  // checkVinNumberUnique,
  // checkVinNumberValid,
}
