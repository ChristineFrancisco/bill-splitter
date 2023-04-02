import React from 'react';

const CalculateTotals = (props) => {
    const determinePercentage = (percentageBeforeTaxTip) => {
        if (percentageBeforeTaxTip == 0) {
            return 0
        } else {
            console.log(percentageBeforeTaxTip)
            return Math.floor((percentageBeforeTaxTip - 1) / 0.01)
        }
    }

    return (
        <div>
            <p>Tax entered: {determinePercentage(props.tax)}%</p>
            <p>Tip entered: {determinePercentage(props.tip)}%</p>
        </div>
    )
}

export default CalculateTotals;