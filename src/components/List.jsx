import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

const List = ({expenses}) => ( 
    <div className="expenses-incurred">
        <div className="expenses-list">
            {
                expenses.map(expense => (
                    <Expense key={expense.id} 
                            expense={expense} 
                    />
                ))
            }
        </div>
    </div>
);
 
List.propTypes = {
    expenses: PropTypes.array.isRequired,
} 

export default List;