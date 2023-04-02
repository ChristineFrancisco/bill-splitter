import React, { useState } from 'react';

const AddTip = (props) => {
    const [enteredTip, setEnteredTip] = useState(0)

    const tipChangeHandler = (event) => {
        setEnteredTip(event.target.valueAsNumber)
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        //this is default JS behavior to prevent entire page from reloading instead of just the component
        
        props.addTip(enteredTip)
        setEnteredTip(0);
    }

    return (
        <form onSubmit={submitHandler}> 
            <div>
                <label>Total Tip: </label>
                <input 
                    type="number"
                    name="tip"
                    step="0.01"
                    min="0.01"
                    placeholder="tip"
                    value={enteredTip}
                    onChange={tipChangeHandler}
                />
                %
            </div>
            <div>
                <button type='submit'>
                    Submit Tip
                </button>
            </div>
        </form>
    )
}

export default AddTip;