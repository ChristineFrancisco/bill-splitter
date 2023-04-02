import EachItemCost from "./Calculations/EachItemCost";
import FinalPersonTotals from "./Calculations/FinalPersonTotals"
import CalculateTotals from "./Calculations/CalculateTotals"

const Form = (props) => {
    return (
        <div>
            <EachItemCost 
                expenses={props.expenses}
                persons={props.persons}
                updateItemCost={props.updateItemCost}
                updateTotalEaten={props.updateTotalEaten}
                tip={props.tip}
                tax={props.tax}
            />
            <CalculateTotals
                tip={props.tip}
                tax={props.tax}
            />
            <FinalPersonTotals
                persons={props.persons}
            />
        </div>
    )
}

export default Form;