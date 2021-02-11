import React, {Fragment, useState} from 'react';

const BudgetForm = () => {

    // Set budget state
    const [quantity, saveQuantity] = useState(0);

    // Error state
    const [error, setError] = useState(false);

    // On input changes update budget state
    const setBudget = event => {
        saveQuantity(Number(event.target.value));
    }

    // Submit budget quantity
    const addBudget = event => {
        event.preventDefault();
        
        //Validate data
        if(quantity < 1 || isNaN(quantity)) {
            setError(true);
            return;
        }


    }

    return (
        <Fragment>
            <h2 className="semi-strong">Set your budget</h2>
            <form onSubmit={addBudget}>
                <input type="number"
                    className="u-full-width"
                    placeholder="Add your montly budget"
                    onChange={setBudget}
                />
                <input type="submit"
                    className="button-primary u-full-width"
                    value="Save budget"
                />
            </form>
        </Fragment>
    )
}
 
export default BudgetForm;