import React, { Component } from 'react'
import { connect } from 'react-redux'

import Transaction from './Transaction/Transaction'
import * as actions from '../../store/actions/index'

class TransactionsDisplay extends Component {
    
    removeTransHandler = (id) => {
        this.props.onRemove(id)
    }


    render() {
        const transactions = this.props.transactions.map((tr, id) => (
            <Transaction 
                key={tr.name+tr.amount+tr.rate}
                name={tr.name}
                amount={tr.amount}
                pln={tr.pln}
                clicked={() => this.removeTransHandler(id)}
                />
        ))
        return (
            <div>
                { transactions }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onRemove: (id) => dispatch(actions.removeTransaction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TransactionsDisplay)