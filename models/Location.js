const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
        },
        distance: {
            type: Number,
            default: 5,
            required: true
        } 
    },

})

module.exports = mongoose.model('Location', locationSchema);