import React, {useContext, useState, useEffect} from 'react'
import { BudgetContextFunc } from './BudgetContext'
import ExpenseItem from "./ExpenseItem"
import Search from "./Search.js"

const Expenses = () => {
    const [keyword, setKeyword] = useState("")
    const {budgetList} = useContext(BudgetContextFunc)
    const [searchResults, setSearchResults] = useState(budgetList)
    
    useEffect(() => {
        const results = budgetList.filter((item) => item.name.toLowerCase().includes(keyword));
        setSearchResults(results);
    },[keyword, budgetList])

    return (
        <>
            <section className="row">
                <div className="col-sm d-flex justify-content-center">
                    <Search setKeyword={setKeyword} />
                 </div>
            </section>
            <h3 style={{color:"white"}} className="font-weight-light text-center">Expenses</h3>
            <ul className="list-group">
                {searchResults.map(item => (
                    <ExpenseItem key={item.id} itemID={item.id} name={item.name} cost={item.cost}/>
                ))}
            </ul>
        </>
    )
}

export default Expenses
