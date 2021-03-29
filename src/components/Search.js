import React from 'react'
import {FaSearchDollar} from "react-icons/fa"
import "./Search.css"


const Search = ({setKeyword}) => {
    
    return (
        <div className="d-inline-flex mb-3">
            <label htmlFor="search-input"><span className="visually-hidden">Search Expenses</span></label>
            <input onChange={(e) => setKeyword(e.target.value)} id="search-input" className="rounded-pill" type="text" placeholder="Search expenses..."></input>
            <div className="ml-2"><FaSearchDollar style={{color: "white"}} size="1.4em"></FaSearchDollar></div>  
        </div>
    )
}

export default Search
