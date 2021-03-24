import React,{ useContext } from 'react'
import {BudgetContextFunc } from "./BudgetContext";

const Budget = () => {

    const {budget} = useContext(BudgetContextFunc)

    return (
        <div className="alert alert-secondary">
            <span>Budget: £{budget}</span>
        </div>
    )
}

export default Budget
