import AddItem from "./FormComponents/AddItem";
import AddPerson from "./FormComponents/AddPerson";
import AddTax from "./FormComponents/AddTax"
import AddTip from "./FormComponents/AddTip"

const Form = (props) => {
    return (
        <div>
            <AddItem addExpense={props.addExpense} persons={props.persons}/>
            <AddPerson addPerson={props.addPerson}  />
            <AddTax addTax={props.addTax}/>
            <AddTip addTip={props.addTip}/>
        </div>
    )
}

export default Form;