import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget"
import Remaining from './components/Remaining';
import SpentSoFar from './components/SpentSoFar';
import Expenses from './components/Expenses';
import AddExpense from './components/AddExpense';

const App = () => {
  return (
    <article className="container">
      <h1 className="mt-4 align-text-center">Is My Budget Enough?</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <SpentSoFar />
        </div>
      </div>
      <section className="mt-3">
        <h3>Expenses</h3>
        <div className="row mt-4">
          <div className="col-sm">
            <Expenses />
          </div>
        </div>
      </section>
      <article>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </article>
    </article>
  )
}

export default App


