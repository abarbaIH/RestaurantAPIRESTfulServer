const router = require('express').Router()

router.use("/restaurants", require('./restaurant.routes'))

module.exports = router

