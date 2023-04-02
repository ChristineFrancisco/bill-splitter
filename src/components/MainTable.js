import Expenses from './MainTableComponents/Expenses'

const MainTable = (props) => {
    return (
        <div>
            <h2>Your Expenses:</h2>
            <Expenses 
                expenses={props.expenses} 
                persons={props.persons}
                updateItemEaten={props.updateItemEaten}
            />
        </div>
    )
}

export default MainTable;