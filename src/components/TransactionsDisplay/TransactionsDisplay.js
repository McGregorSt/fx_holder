import React, { Component } from 'react'
import { connect } from 'react-redux'

import Transaction from './Transaction/Transaction'
import * as actions from '../../store/actions/index'

class TransactionsDisplay extends Component {
    
    render() {
        const transactions = this.props.transactions.map(tr => (
            <Transaction 
                key={tr.name+tr.amount+tr.rate}
                name={tr.name}
                amount={tr.amount}
                pln={tr.pln}
                clicked={this.props.onRemove}
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
        onRemove: (transId) => dispatch()
    }
}

export default connect(mapStateToProps) (TransactionsDisplay)