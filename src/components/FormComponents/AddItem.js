import React, { useState } from 'react';

const AddItem = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredCost, setEnteredCost] = useState(0);

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const costChangeHandler = (event) => {
        setEnteredCost(event.target.valueAsNumber)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //this is default JS behavior to prevent entire page from reloading instead of just the component

        if ( enteredName.length == 0 || enteredCost == 0 ) {
            alert("Please enter valid item name or cost")
            setEnteredName("")
            setEnteredCost(0)
            return false
        }

        const personSet = new Set()

        const expenseData = {
            name: enteredName,
            cost: enteredCost,
            id: Math.ceil(Math.random().toString() * 100000),
            persons: personSet,
            each_person_cost: 0

        }
        props.addExpense(expenseData)
        setEnteredName("");
        setEnteredCost(0);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Item: </label>
                <input 
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    value={enteredName}
                    onChange={nameChangeHandler}
                />
            </div>
            <div>
                <label>Cost: </label>
                <input 
                    type="number"
                    step="0.01"
                    min="0.01"
                    max="10000"
                    name="cost"
                    value={enteredCost}
                    placeholder="Item Cost"
                    onChange={costChangeHandler}
                />
            </div>
            <div>
                <button type='submit'>
                    Submit Item
                </button>
            </div>
        </form>
    )
}

export default AddItem;