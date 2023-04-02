import React from 'react';

const EachItemCost = (props) => {

    const calculateEachItemCost = (expenses, persons, tax, tip) => {
        for (let i = 0; i < expenses.length; i++) {
            const eachPersonCost = expenses[i].cost / expenses[i].persons.size
            props.updateItemCost(expenses[i].id, eachPersonCost)
        }
        console.log(persons)
        for ( let j = 0; j < persons.length; j++ ) {
            let personTotalling = 0;
            for (let y = 0; y < expenses.length; y++) {
                if ( expenses[y].persons.has(persons[j].id ) ) {
                    personTotalling += expenses[y].each_person_cost
                }
            }
            personTotalling = personTotalling * tax * tip
            props.updateTotalEaten(persons[j].id, personTotalling)
        }
    }

    return (
        <div>
            <button 
                onClick={() => calculateEachItemCost(props.expenses, props.persons, props.tax, props.tip)}
            >
                Calculate Item Total
            </button>
        </div>
    )
}

export default EachItemCost;