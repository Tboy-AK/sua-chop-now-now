const express = require('express');
const {
  getNearbyRestaurants
} = require('../controllers/restaurantsController')

const router = express.Router()

router.route('/restaurants').get(getNearbyRestaurants)


module.exports = router