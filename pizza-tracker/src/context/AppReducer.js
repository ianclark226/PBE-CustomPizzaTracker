export default (state, action) => {
  switch(action.type) {
    case 'DELETE_PIZZA':
      return {
        ...state,
        pizzas: state.pizzas.filter(pizza => pizza.id !== action.payload)
      }
    case 'ADD_PIZZA':
      return {
        ...state,
        pizzas: [action.payload, ...state.pizzas]
      }
    default:
      return state;
  }
}