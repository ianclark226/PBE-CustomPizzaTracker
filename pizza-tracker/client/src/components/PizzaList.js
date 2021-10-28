import React, { useContext, useEffect } from 'react';
import { Pizza } from './Pizza'

import { GlobalContext } from '../context/GlobalState';

export const PizzaList = () => {
  const { pizzas, getPizzas } = useContext(GlobalContext);

  useEffect(() => {
    getPizzas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {pizzas.map(pizza => (<Pizza key={pizza.id} pizza={pizza} />))}
      </ul>
    </>
  )
}