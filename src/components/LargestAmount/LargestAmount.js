import React, { Component } from 'react'
import { connect } from 'react-redux'

import Transaction from '../TransactionsDisplay/Transaction/Transaction'
import classes from './LargestAmount.css'

class LargestAmount extends Component {
    render() {
        const sortedTrans = [...this.props.transactions].sort((a, b) => {
            return b.amount - a.amount
        })
        const largeTrans = sortedTrans[0]

        let transaction = null

        if (sortedTrans.length) {
            transaction = (
                <Transaction
                    name={largeTrans.name}
                    amount={largeTrans.amount}
                    pln={largeTrans.pln}
                />
            )
        }
        return (
            <div className={classes.LargestAmountHeader}>
                <h3>Largest transaction:</h3>
                {transaction}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}

export default connect(mapStateToProps)(LargestAmount)