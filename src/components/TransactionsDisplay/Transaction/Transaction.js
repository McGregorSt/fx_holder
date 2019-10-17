import React from 'react'
import { connect } from 'react-redux'

import classes from './Transaction.css'

const Transaction = (props) => (
    <div className={classes.Transaction} onClick={props.clicked}>
        <div className={classes.TransDataTop}>
            <div className={classes.TransDetails}>Name</div>
            <div className={classes.TransData}>{props.name}</div>
        </div>
        <div className={classes.TransDataBtm}>
            <div className={classes.TransDataBtmAmount}>
                <div className={classes.TransDetails}>Amount EUR </div>
                <div className={classes.TransData}>{props.amount}</div>
            </div>
            <div className={classes.TransDataBtmAmount}>
                <div className={classes.TransDetails}>Amount PLN </div>
                <div className={classes.TransData}>{props.pln}</div>
            </div>
        </div>
    </div>
)

const mapStateToProps = state => {
    return {
        transaction: state.transaction
    }
}

export default connect(mapStateToProps)(Transaction)