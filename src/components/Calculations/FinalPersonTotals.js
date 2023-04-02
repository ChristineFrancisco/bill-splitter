import FinalPersonTotal from './FinalPersonTotal'

const FinalPersonTotals = (props) => {
    return(
        <ul>
            {props.persons.map((person) => (
                <FinalPersonTotal
                    key={person.id}
                    name={person.name}
                    total_oweing={person.total_oweing}
                />
            ))}
        </ul>
    )
}

export default FinalPersonTotals