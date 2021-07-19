import React, {useContext}from 'react';
import { GlobalContext } from '../context/GlobalState';

const Pizza = ({ pizza }) => {
    const { deletePizza } = useContext(GlobalContext);
    return (
        <li>{pizza.text, pizza.crust, pizza.size, pizza.toppings} <button onClick={() => deletePizza(pizza.id)} className="delete-btn">x</button> </li> 
    )
}

export default Pizza;