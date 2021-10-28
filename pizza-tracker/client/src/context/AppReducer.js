// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case 'GET_PIZZAS':
      return {
        ...state,
        loading: false,
        pizzas: action.payload
      }
    case 'DELETE_PIZZA':
      return {
        ...state,
        pizzas: state.pizzas.filter(pizza => pizza._id !== action.payload)
      }
    case 'ADD_PIZZA':
      return {
        ...state,
        pizzas: [...state.pizzas, action.payload]
      }
    case 'PIZZA_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}