import React, {useContext} from 'react'
import { BudgetContextFunc } from './BudgetContext'

const Remaining = () => {

    const {remaining} = useContext(BudgetContextFunc);

    return (
        <div className="alert alert-success">
            <span>Remaining: £{remaining}</span>
        </div>
    )
}

export default Remaining
