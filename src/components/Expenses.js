import React, {useContext} from 'react'
import { BudgetContextFunc } from './BudgetContext'
import ExpenseItem from "./ExpenseItem"

const Expenses = () => {

    const {budgetList} = useContext(BudgetContextFunc)

    return (
        <ul className="list-group">
            {budgetList.map(item => (
                <ExpenseItem key={item.id} name={item.name} cost={item.cost}/>
            ))}
        </ul>
    )
}

export default Expenses
