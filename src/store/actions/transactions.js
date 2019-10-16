import * as actionTypes from './actionTypes'

export const addRate = (rate) => {
    return {
        type: actionTypes.ADD_RATE,
        rate: rate
    }
}

export const addTransaction = (transaction) => {
    return {
        type: actionTypes.ADD_TRANSACTION,
        transaction: transaction
    }
}

export const removeTransaction = (id) => {
    return {
        type: actionTypes.DEL_TRANSACTION,
        id: id
    }
}

export const recalcTransaction = (rate) => {
    return {
        type: actionTypes.RECALC_TRANSACTION,
        rate: rate
    }
}