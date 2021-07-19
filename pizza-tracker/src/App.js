import React from 'react';
import Header from './components/Header';
import './App.css';
import PizzaList from './components/PizzaList';
import AddPizza from './components/AddPizza';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
   
      <Header />
      <div className="container">
        <AddPizza />
      <PizzaList />
      </div>
  
    </GlobalProvider>
  );
}

export default App;
