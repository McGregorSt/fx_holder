import React from 'react'
import { connect } from 'react-redux'

import classes from './Transaction.css'

const Transaction = (props) => (
  <div className={classes.Transaction} onClick={props.clicked}>
      <ul className={classes.TransactionList}>
          <li><strong>Name:</strong> {props.name} </li>
          <li><strong>Amount EUR:</strong> {props.amount} </li>
          <li><strong>Amount PLN:</strong> {props.pln} </li>
      </ul>
  </div>
)

const mapStateToProps = state => {
    return {
        transaction: state.transaction
    }
}

export default connect (mapStateToProps)(Transaction)