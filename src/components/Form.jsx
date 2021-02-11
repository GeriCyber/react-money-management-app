import React from 'react';

const Form = () => {
    return ( 
        <form>
            <h2 className="semi-strong">Add your expenses here</h2>
            <div className="camp">
                <label>Expense</label>
                <input  type="text"
                        className="u-full-width"
                        placeholder="Ex: food, internet subscription"
                />
            </div>
            <div className="camp">
                <label>Expense quantity</label>
                <input  type="number"
                        className="u-full-width"
                        placeholder="Ex: 100"
                />
            </div>
            <input type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>
     );
}
 
export default Form;