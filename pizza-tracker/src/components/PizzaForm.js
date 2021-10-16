import React, {useState} from 'react';

const PizzaForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredCrust, setEnteredCrust] = useState(['', 'White', 'Wheat']);
    const [enteredSize, setEnteredSize] = useState(['','Mini', 'Regular']);
    const [enteredToppings, setEnteredToppings] = useState('');

    const Add = enteredCrust.map(Add => Add);


const titleChangeHandler = (e) =>{
    setEnteredTitle(e.target.value);
}

const crustChangeHandler = (e) =>{
    setCrust(e.target.value)
}

const [crust, setCrust] = useState('');


const [size, setSize] = useState('');

const sizeChangeHandler = (e) =>{
    setSize(e.target.value);
}

const toppingChangeHandler = (e) =>{
    setEnteredToppings(e.target.value);
}

const submitHandler = (e) => {
    e.preventDefault();

    const pizzaData = {
        title: enteredTitle,
        crust,
        size,
        toppings: enteredToppings
    };

    props.onSavePizzaData(pizzaData);
        setEnteredTitle('');
        setEnteredCrust('');
        setEnteredSize('');
        setEnteredToppings('');

}

return (
    <form onSubmit={submitHandler}>
        <div className="new-pizza-entries">
            <div className="new-pizza-entry">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-pizza-entry">
                <label for='crust'>Crust:</label>
                <select value={crust} onChange={crustChangeHandler}>
                    {enteredCrust.map((cru) => <option key={cru} value={cru}>{cru}</option>)
                    }
                </select>

            </div>
            <div className="new-pizza-entry">
                <label for='size'>Size:</label>
                <select value={size} onChange={sizeChangeHandler}>
                    {enteredSize.map((siz) => <option key={siz} value={siz}>{siz}</option>)
                    }
                </select>
            </div>
            <div className="new-pizza-entry">
                <label>Toppings</label>
                <input type='text' value={enteredToppings} onChange={toppingChangeHandler} />
            </div>
        </div>

        <div className='new-pizza-action'>
            <button type='submit'>Add Pizza</button>
        </div>
    </form>
)

}

export default PizzaForm;