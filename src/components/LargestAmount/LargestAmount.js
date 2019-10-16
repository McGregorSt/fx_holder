import React, { Component } from 'react'
import { connect } from 'react-redux'

import Transaction from '../TransactionsDisplay/Transaction/Transaction'

class LargestAmount extends Component {
 render () {
     const largeAmount = this.props.transactions
     return (
        <div>
            <Transaction />
        </div>
    )
 }
}
const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}

export default connect(mapStateToProps) (LargestAmount)