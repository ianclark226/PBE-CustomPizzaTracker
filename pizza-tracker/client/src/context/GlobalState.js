import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  pizzas: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getPizzas() {
    try {
      const res = await axios.get('/api/v1/pizzas');

      dispatch({
        type: 'GET_PIZZAS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'PIZZA_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deletePizza(id) {
    try {
      await axios.delete(`/api/v1/pizzas/${id}`);

      dispatch({
        type: 'DELETE_PIZZA',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'PIZZA_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addPizza(pizza) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/pizzas', pizza, config);

      dispatch({
        type: 'ADD_PIZZA',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'PIZZA_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    pizzas: state.pizzas,
    error: state.error,
    loading: state.loading,
    getPizzas,
    deletePizza,
    addPizza
  }}>
    {children}
  </GlobalContext.Provider>);
}