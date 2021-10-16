const Pizza = require('../models/Pizzas');

//@ desc get all pizzas
//@ get /api/v1/pizzas
//@access Public

exports.getPizzas = async (req, res, next) => {
    try {
        const pizzas = await Pizza.find();

        return res.status(200).json({
            success: true,
            count: pizzas.length,
            data: pizzas
        })
    } catch (err) {

        
        return res.status(500).json({
            success: false,
            error: 'server error'
        });
    }
}

//@ desc get all pizzas
//@ get /api/v1/pizzas
//@access Public

exports.addPizza = async (req, res, next) => {
try {
    const { text } = req.body;

    const pizza = await Pizza.create(req.body);

    return res.status(201).json({
        success: true,
        data: pizza
    });
} catch (err) {
    if(err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message);

        return res.status(400).json({
            success: false,
            error:messages
        });
    } else {
        return res.status(500).json({
            success: false,
            error: 'server error'
        });
    }
}
}

//@ desc get all pizzas
//@ get /api/v1/pizzas
//@access Public

exports.deletePizza = async (req, res, next) => {
    try {
        const pizza = await Pizza.findById(req.params.id);

        if(!pizza) {
            return res.status(404).json({
                success: false,
                error: 'no pizza found'
            });
        }

        await pizza.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        });
    }
}