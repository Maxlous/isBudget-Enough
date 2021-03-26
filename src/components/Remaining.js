import React, {useContext} from 'react'
import { BudgetContextFunc } from './BudgetContext'
import {HiCurrencyDollar} from "react-icons/hi"
const Remaining = () => {

    const {remaining} = useContext(BudgetContextFunc);

    return (
        <div className="alert alert-success">
            <span>Remaining: <HiCurrencyDollar size="1.6em"></HiCurrencyDollar> {remaining}</span>
        </div>
    )
}

export default Remaining
