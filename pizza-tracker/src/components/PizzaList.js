import React, {useContext} from 'react';
import  Pizza  from './Pizza';

import {GlobalContext} from '../context/GlobalState';

const PizzaList = () => {
    const {pizzas} = useContext(GlobalContext);

   
    return (
    <>
    <h3>Pizza List</h3>
    <ul className="list">
        {pizzas.map(pizza => (<Pizza key={pizza.id} pizza={pizza} /> ))}
            
       
       
    </ul>
    </>
    )
}

export default PizzaList;