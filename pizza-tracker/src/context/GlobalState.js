import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  pizzas: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deletePizza(id) {
    dispatch({
      type: 'DELETE_PIZZA',
      payload: id
    });
  }

  function addPizza(pizza) {
    dispatch({
      type: 'ADD_PIZZA',
      payload: pizza
    });
  }

  return (<GlobalContext.Provider value={{
    pizzas: state.pizzas,
    deletePizza,
    addPizza
  }}>
    {children}
  </GlobalContext.Provider>);
}

