import React, {useContext} from 'react'
import { BudgetContextFunc } from './BudgetContext'

const SpentSoFar = () => {

    const {spent} = useContext(BudgetContextFunc)

    return (
        <div className="alert alert-danger">
            <span>Spent so far: £{spent}</span>
        </div>
    )
}

export default SpentSoFar
