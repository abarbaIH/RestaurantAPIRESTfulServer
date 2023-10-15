const router = require("express").Router()

const { response } = require("../app")
const Restaurant = require('./../models/Restaurant.model')

router.get("/getAllRestaurants", (req, res, next) => {
    Restaurant
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get("/getOneRestaurant/:restaurant_id", (req, res, next) => {

    const { restaurant_id } = req.params
    Restaurant
        .findById(restaurant_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post("/saveRestaurant", (req, res, next) => {

    const { nombre, direccion, telefono, imageUrl } = req.body

    Restaurant
        .create({ nombre, direccion, telefono, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router