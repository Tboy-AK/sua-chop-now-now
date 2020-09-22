const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
        },
    },
    address: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Restautant', restaurantSchema);