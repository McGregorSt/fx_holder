import React from 'react'

import classes from './Input.css'

const Input = (props) => {
    return (
        <div>
            <input
                className={classes.Input}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                type={props.type}
                onChange={props.changed}
            />
        </div>
    )
}


export default Input