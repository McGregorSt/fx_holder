import React, { Component } from 'react'

import classes from './RateInput.css'
import Input from '../UI/Input/Input'
import Submit from '../UI/Submit/Submit'

class RateInput extends Component {
 render () {
     return (
        <div className={classes.RateInput}>
            EUR --> PLN
            <div>
                <Input style={classes.Input} placeholder='rate'/>
            </div>
            <Submit value='Rate it' />

        </div>
    )
 }
}

export default RateInput