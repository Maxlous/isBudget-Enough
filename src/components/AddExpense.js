import React, { useContext, useState } from 'react'
import { BudgetContextFunc } from './BudgetContext'

const AddExpense = () => {

    const {setBudgetList} = useContext(BudgetContextFunc);
    const [name, setName] = useState("");
    const [cost, setCost] = useState(0)
    const handleSubmit = () => {

    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <h3 className="mb-3 mt-3">Add Expense</h3>
                <div className="row mb-3">
                    <div className="col-sm">
                        <label for="Name">Name</label> 
                        <input className="form-control" type="text" id="Name" placeholder="Enter the name of the expense here" required /> 
                    </div>   
                </div>
                <div className="row mb-4">
                    <div className="col-sm">
                        <label for="Cost">Cost</label> 
                        <input className="form-control" type="number" id="Cost" placeholder="Enter the cost of the expense here" required/>  
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
