import React, {Fragment} from 'react';
import {checkBudget} from '../helpers/helper';
import PropTypes from 'prop-types';

const BudgetControl = ({budget, residuary}) => (
    <Fragment>
        <div className="alert alert-primary">
            <span className="strong">Budget: </span>{budget} $
        </div>
        <div className={checkBudget(budget, residuary)}>
            <span className="strong">Residuary: </span>{residuary} $
        </div>
    </Fragment>
);

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    residuary: PropTypes.number.isRequired,
}
 
export default BudgetControl;