import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './RateInput.css'
import Input from '../UI/Input/Input'
import Submit from '../UI/Submit/Submit'
import * as actions from '../../store/actions/index'


class RateInput extends Component {

    rateHandler = ev => {
        const rate = ev.target.value
        this.props.onRate(rate)
        this.props.onRecalc(rate)
    }

    render() {
        return (
            <div className={classes.RateInput}>
                <h3>Put your rate here:</h3>
                <form onBlur={this.rateHandler}>
                    <div>
                        <Input
                            // style={classes.Input}
                            placeholder='rate' 
                            />
                    </div>
                    {/* <Submit value='Rate it' /> */}
                </form>

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

export default connect(mapStateToProps, mapDispatchToProps) (RateInput)