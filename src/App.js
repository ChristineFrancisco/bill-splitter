import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts'

import Form from './components/Form';
import MainTable from './components/MainTable';
import FinalTotals from './components/FinalTotals'

const EXAMPLE_SUSHI_PERSIONS = new Set();

const EXAMPLE_EXPENSES = [
  {
    id: '00001',
    name: 'sushi',
    cost: 4.23,
    persons: EXAMPLE_SUSHI_PERSIONS,
    each_person_cost: 0
  }
]

const EXAMPLE_PERSONS = [
  {
    id: '00010',
    name: 'Christine',
    total_oweing: 0,
  }
]

//future note: can make items and persons maps that can get updated every add person or add expense handler
//this would need to update eery time there's a new item or new person added to the list

const App = () => {
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses'), (_key, value) => value instanceof Object && value.dataType == "Set" ? new Set(value.value) : value) || EXAMPLE_EXPENSES)
  const [persons, setPersons] = useState(JSON.parse(localStorage.getItem('persons')) || EXAMPLE_PERSONS)
  const [tax, setTax] = useState(0)
  const [tip, setTip] = useState(0)

  console.log(expenses)
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses, (_key, value) => (value instanceof Set ? {dataType: 'Set', value: [...value]} : value)))
    console.log(JSON.stringify(expenses))
  }, [expenses]) 

  useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons))
  }, [persons])

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  const addPersonHandler = (person) => {
    setPersons(prevPersons => {
      return [person, ...prevPersons]
    })
  }

  const addTipHandler = (newTip) => {
    setTip(newTip * 0.01 + 1)
  }

  const addTaxHandler = (newTax) => {
    setTax(newTax * 0.01 + 1)
  }

  const updateItemEaten = (item, person) => {
    let newExpenses = expenses.slice()
    //if it was just newExpenses = expenses, this would just be a reference to the value existing in expenses
    //this would count as mutating the data of the state which is a nono in react
    //this isn't seen as a change in the data 
    //by adding the .slice() method, you create a shallow copy of the data, which is then seen as a change in data

    for (let i  = 0; i < newExpenses.length; i++) {
      let currentItem = newExpenses[i]
      if (currentItem.id === item) {
        currentItem.persons.has( person ) ? 
          currentItem.persons.delete( person ) :
          currentItem.persons.add( person )
      }
    }

    setExpenses(newExpenses)
  }

  const updateItemCost = (item, newCost) => {
    let newExpenses = expenses.slice()
    for (let i = 0; i < newExpenses.length; i++) {
      let currentItem = newExpenses[i]
      if (currentItem.id === item) {
        currentItem.each_person_cost = newCost
      }
      console.log(currentItem)
    }
    setExpenses(newExpenses)
  }

  const updateTotalEaten = (personsId, personCostTotal) => {
    let newPersons = persons.slice()
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].id === personsId) {
        persons[i].total_oweing = personCostTotal
      }
    }
    setPersons(newPersons)
  }

  return (
    <div>
      <Form 
        addExpense={addExpenseHandler}
        addPerson={addPersonHandler}
        persons={persons}
        addTax={addTaxHandler}
        addTip={addTipHandler}
      />
      <MainTable 
        expenses={expenses} 
        persons={persons}
        updateItemEaten={updateItemEaten}
      />
      <FinalTotals
        expenses={expenses} 
        persons={persons}
        updateItemCost={updateItemCost}
        updateTotalEaten={updateTotalEaten}
        tip={tip}
        tax={tax}
      />
    </div>
  );
}

export default App;
