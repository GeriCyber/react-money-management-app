import React, {useState} from 'react';
import BudgetForm from './components/BudgetForm.jsx'

function App() {

  // Set State
  const [budget, setBudget] = useState(0);
  const [residuary, saveResiduary] = useState(0);

  return (
    <div className="container">
      <header >
        <h1>Money Management</h1>
        <div className="content content-principal">
          <BudgetForm
          setBudget={setBudget}
          saveResiduary={saveResiduary}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
