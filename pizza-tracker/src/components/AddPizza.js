import React, {useState} from 'react';

const AddPizza = () => {
    const [text, setText] = useState('');
    const [crust, setCrust] = useState('');
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState('');
    
    return (
      <>
        <h3>Add new Pizza</h3>
        <form>
          <div class="form-control">
            <label htmlFor="text">Name</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Name" />
            <select value={crust} onChange={(e) => setCrust(e.target.value)}id="crust">
              <option value="wheat">Wheat</option>
              <option value="gluten">Gluten Free</option>
              <option value="vegan">Vegan</option>
              <option value="white" selected>
                White
              </option>
              </select>
              <select value={size} onChange={(e) => setSize(e.target.value)}id="size">
              <option value="regular">Regular</option>
              <option value="white" selected>
                Mini
              </option>
              </select>
              
            <input type="textarea" value={toppings} onChange={(e) => setToppings(e.target.value)} placehoder="Enter Toppings" />
            <button className="btn">Add Pizza</button>
          </div>
        </form>
      </>
    );
}

export default AddPizza;