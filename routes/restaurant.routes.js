const router = require("express").Router()

const { response } = require("express")
// const { response } = require("../app")
const Restaurant = require('./../models/Restaurant.model')

router.get("/getAllRestaurants", (req, res, next) => {
    Restaurant
        .find()
        .select({ name: 1, imageUrl: 1 })
        .sort({ name: 1 })
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

    const { name, direction, phone, imageUrl } = req.body

    Restaurant
        .create({ name, direction, phone, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put("/:restaurant_id/edit", (req, res, next) => {

    const { name, direction, phone, imageUrl } = req.body
    const { restaurant_id } = req.params

    Restaurant
        .findByIdAndUpdate(restaurant_id, { name, direction, phone, imageUrl })
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

router.delete("/:restaurant_id/delete", (req, res, next) => {
    const { restaurant_id } = req.params

    Restaurant
        .findByIdAndDelete(restaurant_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router