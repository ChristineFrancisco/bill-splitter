import './Person.css'

//to add all of the names and change their colours based on the items array prop passed in
const Person = (props) => {
    const ateChangeHandler = (event) => {
        event.preventDefault();
        //this is default JS behavior to prevent entire page from reloading instead of just the component

        props.updateItemEaten(props.expenseItem, props.id)
    }

    return (
        <div>
            <span 
                className={ props.ate ? "ate-true" : "ate-false" }
                onClick={ateChangeHandler}
            >

                {props.name}
            </span>
        </div>
    )
}

export default Person;