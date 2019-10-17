import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './Summary.css'

class Summary extends Component {

    render() {
        const numbOfTrans = this.props.transactions.length
        const eurAmount = this.props.transactions.map(tr => {
            return Number(tr.amount)
        })
        const totalEur = eurAmount.reduce((acc, cur) => {
            return acc + cur
        }, 0)
        const plnAmount = this.props.transactions.map(tr => {
            return Number(tr.pln)
        })
        const totalPln = plnAmount.reduce((acc, cur) => {
            return acc + cur
        }, 0)


        return (
            <div className={classes.Summary}>
                <span>No. of transactions
                    <strong>{ numbOfTrans }</strong>
                </span>
                <span>Total amount EUR
                    <strong>{ Number(totalEur).toLocaleString('pl-PL', {maximumFractionDigits:2}) }</strong>
                </span>
                <span>Total amount PLN
                    <strong>{ Number(totalPln).toLocaleString('pl-PL', {maximumFractionDigits:2}) }</strong>
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}

export default connect(mapStateToProps)(Summary)