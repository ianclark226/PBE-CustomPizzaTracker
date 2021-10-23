import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddPizza = () => {
  const [text, setText] = useState('');
  const [crust, setCrust] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState('');
 

  const { addPizza } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newPizza = {
      id: Math.floor(Math.random() * 100000000),
      text,
      crust,
      size,
      toppings
    }

    addPizza(newPizza);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          <label htmlFor="text">crust</label>
          <input type="text" value={crust} onChange={(e) => setCrust(e.target.value)} placeholder="Enter text..." />
          <label htmlFor="text">size</label>
          <input type="text" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Enter text..." />
          <label htmlFor="text">toppings</label>
          <input type="text" value={toppings} onChange={(e) => setToppings(e.target.value)} placeholder="Enter text..." />
        </div>
        
        <button className="btn">Add pizza</button>
      </form>
    </>
  )
  }