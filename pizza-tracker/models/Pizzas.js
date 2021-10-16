const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'please add text']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Pizza', PizzaSchema);