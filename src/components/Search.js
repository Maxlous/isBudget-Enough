import React, {useContext} from 'react'
import {FaSearchDollar} from "react-icons/fa"
import { BudgetContextFunc } from './BudgetContext'
import "./Search.css"

const Search = () => {
    const {budgetList, setBudgetList} = useContext(BudgetContextFunc);
   
    return (
        <form action="/" method="get">
            <label htmlFor="search-input"><span className="visually-hidden">Search Expenses</span></label>
            <input id="search-input" className="rounded-pill" type="text" placeholder="Search expenses..."></input>
            <div className="ml-2"><FaSearchDollar type="submit" style={{color: "white"}} size="1.4em"></FaSearchDollar></div>  
        </form>
    )
}

export default Search
