import React,{ useContext, useState, useEffect } from 'react'
import {BudgetContextFunc } from "./BudgetContext";
import {HiCurrencyDollar} from "react-icons/hi"
import {RiEdit2Line} from "react-icons/ri"
import "./Budget.css"
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
                <RiEdit2Line id="edit-icon" style={{cursor: "pointer"}} className="mr-1" size="1.5em" onClick={editBudget}>Edit</RiEdit2Line>
            </div>
            {toggleBudgetInput && 
                <form onSubmit={handleNewBudget}>
                    <div className="input-group input-group-sm mb-3 budget-input">
                        <div className="input-group-prepend">
                            <span className="input-group-text">New Budget $</span>
                        </div>
                        <input className="form-control" onChange={handleInput} id="budgetInput" type="number"></input>
                        <div id="pleaseMove"><button id="budgetButton" className="btn btn-dark btn-sm ml-4" type="submit">Save</button></div>
                    </div>
                </form>
            }
        </>
    )
}

export default Budget
