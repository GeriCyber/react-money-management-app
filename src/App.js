import React, {useState, useEffect, Fragment} from 'react';
import BudgetControl from './components/BudgetControl.jsx';
import BudgetForm from './components/BudgetForm.jsx'
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import Footer from './components/Footer.jsx';

function App() {

  // Set State
  const [budget, setBudget] = useState(0);
  const [residuary, saveResiduary] = useState(0);
  const [displayBudgetForm, updateBudgetForm] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, saveCreateExpense] = useState(false)

  // useEffect that updates residuary
  useEffect(() => {
    if (createExpense) {

      // Add new budget
      setExpenses([
        ...expenses,
        expense
      ]);

      // Subtract of the current budget
      const budgetResiduary = residuary - expense.quantity;
      saveResiduary(budgetResiduary);

      saveCreateExpense(false);
    }
  }, [expense])

  return (
    <Fragment>
      <div className="container">
        <header >
          <h1 className="semi-strong">Money Management</h1>
          <div className="content content-principal">
            {
              displayBudgetForm ?
              (
                <BudgetForm
                setBudget={setBudget}
                saveResiduary={saveResiduary}
                updateBudgetForm={updateBudgetForm}
                />
              )
              :
              (
                <div className="row flex-full">
                  <div className="one-half column">
                    <Form setExpense={setExpense}
                          saveCreateExpense={saveCreateExpense}
                    />
                  </div>
                  <div className="one-half column">
                    {
                      expenses.length === 0 ? 
                      <h2 className="semi-strong">
                          No expenses yet
                      </h2>
                      :
                      <h2 className="semi-strong">
                          Expenses List
                      </h2>
                    }
                    <List expenses={expenses} />
                    <BudgetControl budget={budget}
                                  residuary={residuary}
                    />
                  </div>

                </div>
              )
            }
          </div>
        </header>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
