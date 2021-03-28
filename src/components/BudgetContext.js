import React, { createContext, useState } from 'react'

export const BudgetContextFunc = createContext()

const BudgetContext = ({ children }) => {
    const [budget, setBudget] = useState(() => {
        const budgetValueStorage = localStorage.getItem("budgetValue");
        return budgetValueStorage ? JSON.parse(budgetValueStorage) : 0 
    });
    const [budgetList, setBudgetList] = useState(() => {
        const budgetListStorage = localStorage.getItem("budgetData");
        return budgetListStorage ? JSON.parse(budgetListStorage) : []
    })
    const [remaining, setRemaining] = useState(0);
    const [spent, setSpent] = useState(() => {
        if (budgetList){
           return budgetList.reduce((acc, val) => (acc + val.cost),0)
        } else {
            return 0
        }
    });
             
    return (
        <BudgetContextFunc.Provider value={{
            budget, 
            budgetList,
            setBudget,
            setBudgetList,
            remaining,
            setRemaining,
            spent,
            setSpent,
        }}>
          {children}  
        </BudgetContextFunc.Provider>
    )
}

export default BudgetContext
