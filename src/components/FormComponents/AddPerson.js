import React, { useState } from 'react';

const AddPerson = (props) => {
    const [enteredPersonName, setEnteredPersonName] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredPersonName(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if ( enteredPersonName.length == 0 ) {
            alert("Please enter a valid name")
            setEnteredPersonName("")
            return false
        }
        //this is default JS behavior to prevent entire page from reloading instead of just the component
        const personData = {
            id: Math.ceil(Math.random() * 100000).toString(),
            name: enteredPersonName,
            total_oweing: 0,   
        }
        props.addPerson(personData)
        setEnteredPersonName("");
    }

    return (
        <form onSubmit={submitHandler}> 
            <div>
                <label>Person's Name: </label>
                <input 
                    type="text"
                    name="personName"
                    placeholder="Person's name"
                    value={enteredPersonName}
                    onChange={nameChangeHandler}
                />
            </div>
            <div>
                <button type='submit'>
                    Submit Person
                </button>
            </div>
        </form>
    )
}

export default AddPerson;