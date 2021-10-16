
// import React, { useContext, useEffect } from 'react';
import PizzaItem from './PizzaItem';

// import { GlobalContext } from '../context/GlobalState';

export const PizzaList = (props) => {
    

    

    if(props.items.length === 0) {
        return null;
    }

    return (
        <ul className="pizza-list">
            {props.items.map((pizza) => (
                <PizzaItem key={pizza.id}
                title={pizza.title}
                crust = {pizza.crust}
                size = {pizza.size}
                toppings ={pizza.toppings} />
            ))}
        </ul>
    )
}

export default PizzaList;