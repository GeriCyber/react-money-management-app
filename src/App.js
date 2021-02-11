import React from 'react';
import BudgetForm from './components/BudgetForm.jsx'

function App() {
  return (
    <div className="container">
      <header >
        <h1>Money Management</h1>
        <div className="content content-principal">
          <BudgetForm />
        </div>
      </header>
    </div>
  );
}

export default App;
