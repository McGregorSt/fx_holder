import React, { Component } from 'react'

import classes from './Input.css'

const Input = (props) => {
     return (
        <div >
            <input className={props.style} placeholder={props.placeholder}/>
        </div>
    )
 }


export default Input