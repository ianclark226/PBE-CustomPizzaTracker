import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    pizzas: [
        { id: 1, text: 'Barrett Browning', crust: 'White', size: 'Mini', toppings: 'tomato sauce, mozzarella' },
        { id: 2, text: 'Mcgovern', crust: 'Wheat', size: 'Regular', toppings: 'tomato sauce, mozzarella, pepperoni'},
        { id: 3, text: 'Veggie Delight', crust: 'Vegan', size: 'Mini', toppings: 'tomato sauce, vegan mozzarella, black olives, spinich saute, chopped tomatoes'},
        { id: 4, text: 'GF Galore', crust: 'Gluten Free', size: 'Regular', toppings: 'tomato sauce, mozzarella, pepperoni, country sausage'}
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

 export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{ pizzas: state.pizzas }}>
        {children}
    </GlobalContext.Provider>)
}

