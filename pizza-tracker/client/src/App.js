import React from 'react';
import './App.css';
import { PizzaList } from './components/PizzaList';
import { AddPizza } from './components/AddPizza';
import { GlobalProvider } from './context/GlobalState';


const App = () => {


return (
<GlobalProvider>
  <div> 
    <AddPizza />
    <PizzaList />
  </div>
  </GlobalProvider>
);
}

export default App;
