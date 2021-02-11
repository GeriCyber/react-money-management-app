import React, {Fragment, useState} from 'react';
import Error from './Error';

const BudgetForm = ({setBudget, saveResiduary, updateBudgetForm}) => {

    // Set quantity state
    const [quantity, saveQuantity] = useState(0);

    // Error state
    const [error, setError] = useState(false);

    // On input changes update quantity state
    const setQuantity = event => {
        saveQuantity(Number(event.target.value));
    }

    // Submit budget quantity
    const addQuantity = event => {
        event.preventDefault();
        
        //Validate data
        if(quantity < 1 || isNaN(quantity)) {
            setError(true);
            return;
        }
        setError(false);
        setBudget(quantity);
        saveResiduary(quantity);
        updateBudgetForm(false);
    }

    return (
        <Fragment>
            <h2 className="semi-strong">Set your budget</h2>
            <form onSubmit={addQuantity}>
                <input type="number"
                    className="u-full-width"
                    placeholder="Add your montly budget quantity"
                    onChange={setQuantity}
                />

                {
                    error ? 
                    <Error message="Invalid budget quantity" />
                    :
                    null
                }

                <input type="submit"
                    className="button-primary u-full-width"
                    value="Save budget"
                />
            </form>
        </Fragment>
    )
}
 
export default BudgetForm;