import EditButton from "./EditButton"

import './Expenses.css'

const EditButtons = (props) => {
    return (
        <div className="expense-item">
            <EditButton
                expenses={props.expenses}
            />
            {props.persons.map((person) => (
                <EditButton
                    person={person}
                />
            ))}
        </div>
    )
}

export default EditButtons