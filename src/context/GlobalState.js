import React, {createContext, useReducer} from "react";

import AppReducer from "./AppReducer";

// define initial state

const initialState = {
    transactions: []
}

// create context

export const GlobalContext = createContext(initialState);



// provider component of context 

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // action that will make calls to the reducer 

    function deleteTransaction(id) {
        //dipatch to our reducer an onject 
        dispatch ({type: "DELETE_TRANSACTION", payload: id});
    }

    function addTransaction(transaction) {
        //dipatch to our reducer an onject 
        dispatch ({type: "ADD_TRANSACTION", payload: transaction});
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}

