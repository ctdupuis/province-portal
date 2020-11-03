import React, { Component } from 'react';
import DestinationInput from './DestinationInput';

export default class DestinationList extends Component {
    renderFields = num => {
        for (let i = 0; i < num; i++) {
            return(<DestinationInput key={i} />)
        }
    }

    render() {
        const inputs = this.props.fields
        return (
            <div>
                # of inputs to be generated: {inputs}
                {this.renderFields(inputs)}
            </div>
        )
    }
}
