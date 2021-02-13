import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({expense}) => (  
    <li>
        <p>
            <span className="strong">{expense.expense}</span>
            <span className="expense">
                $ {expense.quantity}
            </span>
        </p>
    </li>
);

Expense.propTypes = {
    expense: PropTypes.object.isRequired,
}

export default Expense;