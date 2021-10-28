const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'please add some text']
    },
    crust: {
        type: String,
        trim: true,
        required: [ true, 'select a crust']
    },
    size: {
        type: String,
        trim: true,
        required: [true, 'select a size']
    },
    toppings: {
        type: String,
        trim: true,
        required: [true, 'enter toppings']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Pizza', PizzaSchema);