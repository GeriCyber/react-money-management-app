import React, {useState} from 'react';
import BudgetForm from './components/BudgetForm.jsx'
import Form from './components/Form.jsx';

function App() {

  // Set State
  const [budget, setBudget] = useState(0);
  const [residuary, saveResiduary] = useState(0);
  const [displayBudgetForm, updateBudgetForm] = useState(true);

  return (
    <div className="container">
      <header >
        <h1>Money Management</h1>
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
              <div className="row">
                <div className="one-half column">
                  <Form />
                </div>
                <div className="one-half column">

                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
