import React, {useContext} from 'react'
import {TiDelete} from "react-icons/ti"
import { BudgetContextFunc } from './BudgetContext'

const ExpenseItem = ({name, cost, itemID}) => {
    const {budgetList, setBudgetList, spent, setSpent, remaining, setRemaining} = useContext(BudgetContextFunc);

    const deleteExpense = () => {
        const newList = budgetList.filter(item => item.id !== itemID);
        setSpent(spent - cost);
        setRemaining(remaining + cost)
        setBudgetList(newList);
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center'">
            {name}
            <div>
                <span className="badge badge-primary badge-pill mr-4">
                    ${cost}
                </span>
                <TiDelete onClick={deleteExpense} size="1.6em"></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem
