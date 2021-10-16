
import React from 'react';
import PizzaItem from './PizzaItem';

const PizzaList = (props) => {

    if(props.items.length === 0) {
        return <h2>None</h2>
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