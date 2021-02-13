import React, {useState} from 'react';
import shortid from 'shortid';
import Error from './Error'
import PropTypes from 'prop-types';

const Form = ({setExpense, saveCreateExpense}) => {

    // Create states
    const [expenseName, saveExpense] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [error, setError] = useState(false);

    const addExpense = event => {
        event.preventDefault();

        // Validate data
        if (quantity < 1 || isNaN(quantity) || expenseName.length === 0) {
            setError(true);
            return;
        }
        setError(false);

        const expense = {
            expense: expenseName,
            quantity,
            id: shortid.generate(),
        }
        
        // Pass expense
        setExpense(expense);
        saveCreateExpense(true);

        //Reset form
        saveExpense('');
        saveQuantity(0);
    }

    return ( 
        <form onSubmit={addExpense} 
             className="w-100"
        >
            <h2 className="semi-strong">Add your expenses here</h2>
            <div className="field">
                <label>Expense</label>
                <input  type="text"
                        className="u-full-width"
                        placeholder="Ex: food, internet subscription"
                        value={expenseName}
                        onChange={event => saveExpense(event.target.value)}
                />
            </div>
            <div className="field">
                <label>Expense quantity</label>
                <input  type="number"
                        className="u-full-width"
                        placeholder="Ex: 100"
                        value={quantity}
                        onChange={event => saveQuantity(Number(event.target.value))}
                />
            </div>
            {
                error ? <Error message={'All fields are required'} />
                : null
            }
            <input type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>
     );
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    saveCreateExpense: PropTypes.func.isRequired,
}
 
export default Form;