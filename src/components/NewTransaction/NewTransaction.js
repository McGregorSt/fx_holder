import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index'
import NameInput from './NameInput/NameInput'
import AmountInput from './AmountInput/AmountInput'
import Submit from '../UI/Submit/Submit'

class NewTransaction extends Component {

    state = {
        name: '',
        amount: 0
    }

    nameHandler = (ev) => {
        this.setState({ name: ev.target.value })
    }
    amountHandler = (ev) => {
        this.setState({ amount: ev.target.value })
    }
    addTransactionHandler = ev => {
        ev.preventDefault()
        const transaction = {
            name: this.state.name,
            amount: this.state.amount
        }
        this.props.onAddIt(transaction)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTransactionHandler}>
                    <NameInput changed={this.nameHandler} />
                    <AmountInput changed={this.amountHandler} />
                    <Submit value='Add it'
                        // clicked={() => this.props.onAddIt(this.state.name, this.state.amount)}
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