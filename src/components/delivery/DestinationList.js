import React, { Component } from 'react';
import DestinationInput from './DestinationInput';
import Loading from '../static/Loading';

export default class DestinationList extends Component {
    renderFields = num => {
        // debugger
        let target = parseInt(num)
        for (let i = 0; i < target; i++) {
            return(<DestinationInput key={i} />)
        }
    }

    render() {
        const { inputs, clicked } = this.props
        return (
            <div>
                # of inputs to be generated: {inputs}
                {clicked ? this.renderFields(inputs) : null}
            </div>
        )
    }
}
