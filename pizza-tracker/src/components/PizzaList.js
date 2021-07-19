import React, {useContext} from 'react';

import {GlobalContext} from '../context/GlobalState';

const PizzaList = () => {
    const {pizzas} = useContext(GlobalContext);

   
    return (
    <>
    <h3>Pizza List</h3>
    <ul className="list">
        {pizzas.map(pizza => (<li>{pizza.text}, {pizza.crust}, {pizza.size}, {pizza.toppings}  <button className="delete-btn">x</button> </li> ))}
            
       
       
    </ul>
    </>
    )
}

export default PizzaList;