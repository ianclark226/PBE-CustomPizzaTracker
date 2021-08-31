import React from 'react';

const PizzaItem = (props) => {
    return (
        <li>
            <div className="pizza-item-name">{props.title}</div>
                
                <div classNmae="pizza-item-crust">{props.crust}</div>
                <div classNmae="pizza-item-size">{props.size}</div>
                <div classNmae="pizza-item-toppings">{props.toppings}</div>
            
        </li>
    )

}

export default PizzaItem;