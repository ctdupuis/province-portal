import React, { Component } from 'react';
import { FaPen } from 'react-icons/fa';

export default class EditStopFields extends Component {
    state = {
        patient_name: "",
        patient_address: "",
        miles: "",
        routeID: this.props.route.id,
        isEditing: false,
        id: undefined,
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = event => {
        event.preventDefault();
        // this.props.editStop(this.state);
    }

    toggleEdit = event => {
        const id = event.currentTarget.dataset.id
        if (this.state.id) {
            this.setState({
                ...this.state,
                id: undefined,
                patient_name: "",
                patient_address: "",
                miles: ""
            })
        } else {
            const {
                patient_name,
                patient_address
            } = this.props.route.stops.find(stop => stop.id === parseInt(id))
            this.setState({
                id: id,
                patient_name: patient_name,
                patient_address: patient_address
            })
        }
    }

    renderStopFields = () => {
        return this.props.route.stops.map((s) => {
            debugger
            return(
                this.state.id == s.id ? 
                <tr key={s.id}>
                    <td>
                        <label>Patient Name</label>
                        <input 
                            type="text" 
                            onChange={this.onChange}
                            name="patient_name"
                            className="smaller-fields"
                            defaultValue={s.patient_name}
                        />
                    </td>

                    <td>
                        <label>Patient Address</label>
                        <input 
                            type="text"
                            onChange={this.onChange}
                            name="patient_address"
                            className="smaller-fields"
                            defaultValue={s.patient_address}
                        />
                    </td>
                </tr>
                :
                <tr>
                    <td>
                        <label>Patient Name</label>
                        <p>{s.patient_name}</p>
                    </td>

                    <td>
                        <label>Patient Address</label>
                        <p>{s.patient_address}</p>
                    </td>

                    <td>
                        <button data-id={s.id} className="edit-info" onClick={this.toggleEdit}>
                            <FaPen />
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        const { patient_name, patient_address } = this.props.route
        const disabled = this.state.patient_name === "" || this.state.patient_address === "" || this.state.miles === ""
        return (
            <tr>
                {this.renderStopFields()}

                <tr>
                    <td>
                        <label>Adjusted Mileage</label>
                        <input 
                            type="number"
                            step=".1"
                            max="50"
                            min="0"
                            name="miles"
                            onChange={this.onChange}
                            className="smaller-fields"
                            value={this.state.miles}
                            style={{ textAlign: "center" }}
                        />
                    </td>

                    <td>
                        <button className="green-btn" disabled={disabled} onClick={this.handleClick}>Submit</button>
                    </td>
                </tr>
            </tr>
        )
    }
}
