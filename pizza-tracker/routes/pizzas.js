const express = require('express');
const router = express.Router();
const { getPizzas, addPizza, deletePizza } = require('../controllers/pizzas');

router.route('/')
.get(getPizzas)
.post(addPizza);

router
.route('/:id')
.delete(deletePizza);

module.exports = router;