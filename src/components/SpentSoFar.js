import React, {useContext} from 'react'
import { BudgetContextFunc } from './BudgetContext'
import {HiCurrencyDollar} from "react-icons/hi"

const SpentSoFar = () => {

    const {spent} = useContext(BudgetContextFunc)

    return (
        <div className="alert alert-danger">
            <span>Spent so far: <HiCurrencyDollar size="1.6em"></HiCurrencyDollar> {spent}</span>
        </div>
    )
}

export default SpentSoFar
