import React from 'react'

const Submit = (props) => (
  <div>
      <input type='submit' name='submit' value={props.value} onClick={props.clicked}/>
  </div>
)

export default Submit