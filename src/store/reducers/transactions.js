import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    rate: null,
    transaction: {
        name: null,
        amount: null,
        pln: null
    },
    transactions: []
}

const addRate = (state, action) => {
    return updateObject(state, {
        rate: action.rate
    })
}

const addTransaction = (state, action) => {
    const newTransaction = updateObject(action.transaction, {
        pln: (action.transaction.amount * state.rate).toFixed(2)
    })
    return updateObject(state, {
        transaction: newTransaction,
        transactions: state.transactions.concat(newTransaction)
    })

}


const removeTransaction = (state, action) => {

}

const recalcTransaction = (state, action) => {
    console.log(state.transactions)
    const updatedTransactions = state.transactions.map(tr => {
        return updateObject(tr, {
            pln: (tr.amount * action.rate).toFixed(2)
        })
    })
    // return updateObject(state, {
    //     transactions: updateObject(state.transactions, updatedTransactions)
    // })
    return updateObject(state, {
        transactions: updatedTransactions
    })    

}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RATE: return addRate(state, action)
        case actionTypes.ADD_TRANSACTION: return addTransaction(state, action)
        case actionTypes.DEL_TRANSACTION: return removeTransaction(state, action)
        case actionTypes.RECALC_TRANSACTION: return recalcTransaction(state, action)
        default: return state
    }
}

export default reducer