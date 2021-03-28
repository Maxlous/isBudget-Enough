import React,{ useContext, useState, useEffect } from 'react'
import {BudgetContextFunc } from "./BudgetContext";
import {HiCurrencyDollar} from "react-icons/hi"
import {RiEdit2Line} from "react-icons/ri"
const Budget = () => {

    const [toggleBudgetInput, setToggleBudgetInput] = useState(false);
    const [newBudgetValue, setNewBudgetValue] = useState(0);
    const {budget, setBudget, budgetList, setRemaining} = useContext(BudgetContextFunc);

    const editBudget = () => {
        setToggleBudgetInput(!toggleBudgetInput)
    }

    const handleInput = (e) => {
        setNewBudgetValue(e.target.valueAsNumber)
    }

    const handleNewBudget = (e) => {
        e.preventDefault()
        setBudget(newBudgetValue);
        localStorage.setItem("budgetValue", JSON.stringify(newBudgetValue))
        setToggleBudgetInput(!toggleBudgetInput)
    }
    
    useEffect(() => {
        setRemaining(budget - budgetList.reduce((acc, val) => {return acc + val.cost},0))
    })

    return (
        <>
            <div className="alert alert-secondary d-flex justify-content-between">
                <span>Estimated Budget: <HiCurrencyDollar size="1.6em"></HiCurrencyDollar> {budget}</span>
                <RiEdit2Line style={{cursor: "pointer"}} className="mr-1" size="1.5em" onClick={editBudget}>Edit</RiEdit2Line>
            </div>
            {toggleBudgetInput && 
                <form onSubmit={handleNewBudget}>
                    <div className="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">New Budget $</span>
                        </div>
                        <input className="form-control" onChange={handleInput} id="budgetInput" type="number"></input>
                        <button style={{backgroundColor: "#0096c7", }} className="btn btn-dark btn-sm ml-4" type="submit">Save</button>
                    </div>
                </form>
            }
        </>
    )
}

export default Budget
