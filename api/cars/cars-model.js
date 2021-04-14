
const db = require("./../../data/db-config.js");

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars")
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars").where("id", id).first()
}

const create = async ({vin,make,model,mileage}) => {
  // DO YOUR MAGIC
  const [id] = await db("cars").insert({vin, make, model, mileage})
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create,
}