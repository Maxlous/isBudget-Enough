import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BudgetContext from './components/BudgetContext';

ReactDOM.render(
  <React.StrictMode>
    <BudgetContext>
      <App />
    </BudgetContext>
  </React.StrictMode>,
  document.getElementById('root')
);

