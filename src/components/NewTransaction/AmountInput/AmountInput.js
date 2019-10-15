import React from 'react'

import Input from '../../UI/Input/Input'
import classes from './AmountInput.css'

const AmountInput = (props) => (
  <div>
      <Input style={classes.Input} placeholder='amount'/> 
  </div>
)

export default AmountInput