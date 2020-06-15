import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const sign = transaction.amount > 0 ? "+" : "-"

    const signcolor = sign === "+" ? "plus" : "minus"

    const { deleteTransaction } = useContext(GlobalContext);

    return ( 
        <li className={signcolor}> 
            {transaction.text} <span> {sign} PKR {Math.abs(transaction.amount)} </span> 
            <button className="delete-btn" onClick={()=> deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
