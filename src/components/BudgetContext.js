import React, { createContext, useState } from 'react'

export const BudgetContextFunc = createContext()

const BudgetContext = ({ children }) => {
    const [budget, setBudget] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [spent, setSpent] = useState(0);
    const [budgetList, setBudgetList] = useState([
        {id:2343, name: "burak", cost:32432},
        {id:2345, name: "burak", cost:32432},
        {id:2344, name: "burak", cost:32432},
    ])
             
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
