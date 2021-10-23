import React, { useContext } from 'react';
import { Pizza } from './Pizza'

import { GlobalContext } from '../context/GlobalState';

export const PizzaList = () => {
  const { pizzas } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {pizzas.map(pizza => (<Pizza key={pizza.id} pizza={pizza} />))}
      </ul>
    </>
  )
}