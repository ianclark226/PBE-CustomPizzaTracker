import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Pizza = ({ pizza }) => {
  const { deletePizza } = useContext(GlobalContext);

  

  return (
    <li>
      {pizza.text} {pizza.crust} {pizza.size} {pizza.toppings}<button onClick={() => deletePizza(pizza._id)} className="delete-btn">Delete</button>
    </li>
  )
}