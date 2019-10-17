import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index'
import NameInput from './NameInput/NameInput'
import AmountInput from './AmountInput/AmountInput'
import Submit from '../UI/Submit/Submit'
import classes from './NewTransaction.css'

class NewTransaction extends Component {

    state = {
        name: '',
        amount: 0,
        valid: true
    }

    nameHandler = (ev) => {
        this.setState({ name: ev.target.value })
    }
    amountHandler = (ev) => {
        this.validationCheck(ev)
        this.setState({ amount: ev.target.value })
    }
    addTransactionHandler = ev => {
        ev.preventDefault()
        const transaction = {
            name: this.state.name,
            amount: this.state.amount
        }
        this.props.onAddIt(transaction)
        const form = document.querySelectorAll('#form input')
        form[0].value = ''
        form[1].value = ''
    }
    validationCheck = (ev) => {
        const amount = ev.target.value
        if ([...amount].includes(',')) {
            this.setState({ valid: false })
        } else {
            this.setState({ valid: true })
        }
    }

    render() {
        let message = null
        if (!this.state.valid) {
            message = (
                <span style={{ fontSize: '10px', color: 'red' }}>USE dot, not comma</span>
            )

        }
        return (
            <div className={classes.NewTransaction}>
                <form id='form' onSubmit={this.addTransactionHandler}>
                    <NameInput changed={this.nameHandler} />
                    <AmountInput changed={this.amountHandler}
                    />
                    {message}
                    <Submit value='Add it'
                    />
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transaction: state.transaction
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddIt: (transaction) => dispatch(actions.addTransaction(transaction))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction)