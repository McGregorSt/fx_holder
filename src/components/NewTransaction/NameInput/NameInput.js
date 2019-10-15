import React from 'react'

import Input from '../../UI/Input/Input'
import classes from './NameInput.css'

const NameInput = (props) => (
  <div>
      <Input 
        placeholder='name of transaction'
        style={classes.Input}/>
  </div>
)

export default NameInput