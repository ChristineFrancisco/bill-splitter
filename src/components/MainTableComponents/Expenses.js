import React, { useState } from 'react';

import Expense from './ExpensesAndPersons/Expense'
import Person from './ExpensesAndPersons/Person'
import EditButton from './EditButtons'

import './Expenses.css'
import './ExpensesAndPersons/Expense.css'
import EditButtons from './EditButtons'

const Expenses = (props) => {
    return (
        <div className="expenses">
            {props.expenses.map((expense) => (
                <div className="expense-item" key={expense.id}>
                    <Expense 
                        name={expense.name} 
                        cost={expense.cost}
                    />
                    {props.persons.map((person) => (
                        <Person
                            key={person.id}
                            id={person.id}
                            expenseItem={expense.id}
                            ate={expense.persons.has(person.id)}
                            name={person.name}
                            updateItemEaten={props.updateItemEaten}
                            // maybe clean this up later TODO
                        />
                    ))}
                </div>
            ))}
            {/* <EditButtons
                expenses={props.expenses}
                persons={props.persons}
            /> */}
        </div>
    )
}

export default Expenses;