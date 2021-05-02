import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import SpentSoFar from "./components/SpentSoFar";
import Expenses from "./components/Expenses";
import AddExpense from "./components/AddExpense";
import "./styles/App.css";
const App = () => {
  return (
    <article className="container">
      <h1
        style={{ color: "white" }}
        className="mt-5 font-weight-light text-center"
      >
        Is My Budget Enough?
      </h1>
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
      <article className="mt-3">
        <div className="row mt-4">
          <div className="col-sm">
            <Expenses />
          </div>
        </div>
      </article>
      <article>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </article>
    </article>
  );
};

export default App;
