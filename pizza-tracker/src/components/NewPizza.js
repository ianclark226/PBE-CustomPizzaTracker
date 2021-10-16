import React, { useState } from 'react';
import PizzaForm from './PizzaForm';

const NewPizza = (props) => {
    const [isCreating, setIsCreating] = useState(false);
    const savePizzaDataHandler = (enteredPizzaData) => {
    const pizzaData = {
        ...enteredPizzaData,
        id: Math.random().toString()
    };
    props.onAddPizza(pizzaData);
    setIsCreating(false);
}
    
    const startCreatingHandler = () => {
        setIsCreating(true)
    }

    const stopCreatingHandler = () => {
        setIsCreating(false);
    }

    return (
        <div className="new-pizza">
            {!isCreating && (
                <button onClick={startCreatingHandler}>Add New Pizza</button>
            )}
            {isCreating && (
                <PizzaForm
                onSavePizzaData={savePizzaDataHandler}
                onCancel={stopCreatingHandler} />
            )}
        </div>
    )
} 

export default NewPizza;