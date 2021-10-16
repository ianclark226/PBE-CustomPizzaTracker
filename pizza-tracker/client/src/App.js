import React, {useState} from 'react';
import './App.css';
import PizzaList from './components/PizzaList';
import NewPizza from './components/NewPizza';

const App = () => {
const [pizzas, setPizzas] = useState('');

const addPizzaHandler = (pizza) => {
  setPizzas((prevPizzas) => {
    return [pizza, ...prevPizzas];
  })
}

return (
  <div> 
    <NewPizza onAddPizza={addPizzaHandler}/>
    <PizzaList items={pizzas} />
  </div>
);
}

export default App;
