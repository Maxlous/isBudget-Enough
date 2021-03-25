import React, { useContext, useState } from 'react'
import { BudgetContextFunc } from './BudgetContext'

const AddExpense = () => {

    const {budget, setBudget, 
        budgetList, setBudgetList, 
        spent, setSpent,
        remaining, setRemaining} = useContext(BudgetContextFunc);
    const [name, setName] = useState("");
    const [cost, setCost] = useState(0)

    const handleNameInput = (e) => {
        setName(e.target.value)
    }
    const handleCostInput = (e) => {
        console.log(e)
        setCost(e.target.valueAsNumber)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBudgetList = [...budgetList, {id : Math.random(), name, cost}];
        setBudgetList(newBudgetList)
        setBudget(budget - cost)
        setSpent(spent + cost)
        setRemaining(remaining - cost)
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <h3 className="mb-3 mt-3">Add Expense</h3>
                <div className="row mb-3">
                    <div className="col-sm">
                        <label for="Name">Name</label> 
                        <input onChange={handleNameInput} className="form-control" type="text" id="Name" placeholder="Enter the name of the expense here" required /> 
                    </div>   
                </div>
                <div className="row mb-4">
                    <div className="col-sm">
                        <label for="Cost">Cost</label> 
                        <input onChange={handleCostInput} className="form-control" type="number" id="Cost" placeholder="Enter the cost of the expense here" required/>  
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <button className="btn btn-warning" type="submit">Add</button>
                    </div>
                </div>    
           </form>
        </article>
    )
}

export default AddExpense
