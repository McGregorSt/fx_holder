import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './RateInput.css'
import Input from '../UI/Input/Input'
import Submit from '../UI/Submit/Submit'
import * as actions from '../../store/actions/index'


class RateInput extends Component {

    state = { 
        valid: true
    }

    rateHandler = ev => {
        const rate = ev.target.value
        this.props.onRate(rate)
        this.props.onRecalc(rate)
    }

    validationCheck = (ev) => {
        const rate = ev.target.value
        console.log([...rate].includes(','))
        if ([...rate].includes(',')) {
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
            <div >
                <h3>Put your rate here:</h3>
                    <form onBlur={this.rateHandler} onChange={this.validationCheck}>
                        <div className={classes.RateInput}>
                            <Input
                                placeholder='rate'
                                // type='number'
                                maxLength='6'
                            />
                        </div>
                    </form>
                    { message }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rate: state.rate,
        transactions: state.transactions
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onRate: (rate) => dispatch(actions.addRate(rate)),
        onRecalc: (rate) => dispatch(actions.recalcTransaction(rate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RateInput)