const mongoose = require('mongoose');
const PizzaSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    
});

module.exports = mongoose.model('Pizza', PizzaSchema);