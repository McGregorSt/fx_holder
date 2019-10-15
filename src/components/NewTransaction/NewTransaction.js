import React, { Component } from 'react'

import NameInput from './NameInput/NameInput'
import AmountInput from './AmountInput/AmountInput'
import Submit from '../UI/Submit/Submit'

class NewTransaction extends Component {
    render() {
        return (
            <div>
                <NameInput />
                <AmountInput />
                <Submit value='Add it'/>

            </div>
        )
    }
}

export default NewTransaction