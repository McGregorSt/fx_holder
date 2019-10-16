import React, { Component } from 'react'

import Input from '../../UI/Input/Input'
import classes from './NameInput.css'

class NameInput extends Component {

    state = {
        name: ''
    }

    render() {
        return (
            <div>
                <Input
                    placeholder='name of transaction'
                    style={classes.Input}
                    changed={this.props.changed}
                />
            </div>
        )
    }
}


export default NameInput