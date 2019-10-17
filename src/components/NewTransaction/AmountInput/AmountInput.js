import React from 'react'

import Input from '../../UI/Input/Input'
import classes from './AmountInput.css'

const AmountInput = (props) => (
    <div>
        <Input
            style={classes.Input}
            type={props.type}
            value={props.value}
            placeholder='amount'
            changed={props.changed} />
    </div>
)

export default AmountInput