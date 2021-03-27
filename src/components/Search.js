import React, {useContext, useState} from 'react'
import {FaSearchDollar} from "react-icons/fa"
import { BudgetContextFunc } from './BudgetContext'
import "./Search.css"

const Search = () => {
    const [keyword, setKeyword] = useState("")
    const {budgetList, setBudgetList} = useContext(BudgetContextFunc);
   

    return (
        <form action="/" method="get">
            <label htmlFor="search-input"><span className="visually-hidden">Search Expenses</span></label>
            <input name="s" id="search-input" onChange={(e) => setKeyword(e.target.value)} className="rounded-pill" type="text" placeholder="Search expenses..."></input>
            <div className="ml-2"><FaSearchDollar type="submit" style={{color: "white"}} size="1.4em"></FaSearchDollar></div>  
            <button type="submit">ilet</button>
        </form>
    )
}

export default Search
