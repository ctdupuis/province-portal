import React, { Component } from 'react';
import { FaPen } from 'react-icons/fa';

export default class EditStopFields extends Component {
    state = {
        patient_name: "",
        patient_address: "",
        miles: "",
        routeID: this.props.route.id,
        id: undefined
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = event => {
        event.preventDefault();
        this.props.editStop(this.state);
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
            return(
                this.state.id == s.id ? 
                <div className="stops-container" key={s.id}>
                    <div className="stop">

                        <div className="form-group" style={{ flexDirection: "column", display: "flex", alignItems: "center"}}>
                            <label>Patient Name</label>
                            <input 
                                type="text" 
                                onChange={this.onChange}
                                name="patient_name"
                                className="smaller-fields"
                                defaultValue={s.patient_name}
                                style={{ width: "50%" }}
                            />
                        </div>

                        <div className="form-group" style={{ flexDirection: "column", display: "flex", alignItems: "center" }}>
                            <label>Patient Address</label>
                            <input 
                                type="text"
                                onChange={this.onChange}
                                name="patient_address"
                                className="smaller-fields"
                                defaultValue={s.patient_address}
                                style={{ width: "50%" }}
                            />
                        </div>

                        <div className="form-group">
                            <button className="cancel" onClick={this.toggleEdit}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className="stops-container">
                    <div className="stop">

                        <div className="form-group">
                            <label>Patient Name</label>
                            <p>{s.patient_name}</p>
                        {/* </div>

                        <div className="form-group"> */}
                            <label>Patient Address</label>
                            <p>{s.patient_address}</p>
                        </div>

                        <div className="form-group">
                            <button data-id={s.id} className="edit-info" onClick={this.toggleEdit}>
                                <FaPen />
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        const { patient_name, patient_address } = this.props.route
        const disabled = this.state.patient_name === "" || this.state.patient_address === "" || this.state.miles === ""
        return (
            <tr>
                {this.renderStopFields()}

                <div className="stop">
                    <div className="form-group">
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
                        />
                    </div>

                    <div className="form-group">
                        <button className="green-btn" disabled={disabled} onClick={this.handleClick}>Submit</button>
                    </div>
                </div>
            </tr>
        )
    }
}
