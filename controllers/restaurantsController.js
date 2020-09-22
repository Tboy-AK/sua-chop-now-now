// @desc       Goes to the root Directory
// @routes      GET /api/v1/home
// @access      Public

const RestaurantModel = require('../models/Restaurant');

exports.getNearbyRestaurants = (req, res) => {
  const distance = parseInt(req.query.distance, 10);
  const longitude = parseFloat(req.query.longitude);
  const latitude = parseFloat(req.query.latitude);

  // The radius of the earth in meters
  const earthRad = 6371000;
  const userRadius = distance / earthRad;

  RestaurantModel.find({
    location: {
      $geoWithin: {
        $centerSphere: [
          [longitude, latitude],
          userRadius,
        ]
      }
    }
  })
    .then((restaurants) => {
      return res.json({
        message: 'Jẹun lọ',
        count: restaurants.length,
        data: restaurants,
      });
    })
    .catch((err) => res.status(400).send(err.message));


};