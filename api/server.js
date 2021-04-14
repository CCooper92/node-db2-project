const express = require("express")

const carsRouter = require("./cars/cars-router.js")
const server = express()
// DO YOUR MAGIC
server.use(express.json())
server.use('/api/cars', carsRouter)

module.exports = server;
