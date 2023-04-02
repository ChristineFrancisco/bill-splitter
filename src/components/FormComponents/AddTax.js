import React, { useState } from 'react';

const AddTax = (props) => {
    const [enteredTax, setEnteredTax] = useState(0)

    const taxChangeHandler = (event) => {
        setEnteredTax(event.target.valueAsNumber)
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        //this is default JS behavior to prevent entire page from reloading instead of just the component
        
        props.addTax(enteredTax)
        setEnteredTax(0);
    }

    return (
        <form onSubmit={submitHandler}> 
            <div>
                <label>Total Tax: </label>
                <input 
                    type="number"
                    name="tax"
                    step="0.01"
                    min="0.01"
                    placeholder="tax"
                    value={enteredTax}
                    onChange={taxChangeHandler}
                />
                %
            </div>
            <div>
                <button type='submit'>
                    Submit Tax
                </button>
            </div>
        </form>
    )
}

export default AddTax;