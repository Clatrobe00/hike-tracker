const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hikeSchema = new Schema ({
    name: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 2,
    },
    distance: {
        type: Number,
        required: true,
        max: 1000
    },
    date: {
        type: Date,
        default: Date.now,
      }
})

const Hike = mongoose.model('Hike', hikeSchema);
module.exports = Hike , hikeSchema;