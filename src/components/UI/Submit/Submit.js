import React from 'react'

import classes from './Submit.css'

const Submit = (props) => (
    <div>
        <input
            type='submit'
            name='submit'
            value={props.value}
            onClick={props.clicked}
            className={classes.Submit}
        />
    </div>
)

export default Submit