const express = require('express');
const router = express.Router();
const { getPizzas, addPizza, deletepizza } = require('../controllers/pizzas');

router.route('/')
.get(getPizzas)
.post(addPizza)

router
.route('/:id')
.delete(deletepizza)

module.exports = router;