import React, { Component } from 'react';
import { 
  Map,
  GoogleApiWrapper,
  Marker,
  withGoogleMap,
  withScriptjs
 } from 'google-maps-react';
import { getMileage } from '../../actions/deliveries';
import '../../stylesheets/delivery.css';
import DestinationInput from './DestinationInput';
require('dotenv').config();

class DeliveryMap extends Component {

  state = {
    address: {
      street: '',
      city: '',
      state: 'LA',
      zipCode: ''
    },
    origins: { lat: 30.146626, lng: -92.035548} 
  }

  handleChange = event => {
    this.setState({ 
      ...this.state,
      address: {
        ...this.state.address,
        [event.target.name]: event.target.value}
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    getMileage(this.state, process.env.REACT_APP_GOOGLE_API_KEY)
    console.log(event)
  }

  saveDestination = event => {
    this.state.destinations.push(event.target.value)
  }

    render() {
        return (
            <div className="map-container">
              <form className="destination-input" onSubmit={this.handleSubmit}>
                <label htmlFor="destination">Destination</label>
                <DestinationInput 
                  saveDestination={this.saveDestination} 
                  handleChange={this.handleChange}
                  values={this.state.address}
                />
                <input type="submit" value="Check the Distance" />
              </form>
                <Map 
                    google={this.props.google}
                    initialCenter={this.state.origins}
                    className={"map"}
                    zoom={13}
                    style={{ height: '75%', width: "50%", position: 'relative'}}
                    >
                    <Marker 
                      position={{ lat: 30.146626, lng: -92.035548 }}
                      name="Province"
                      title={"This is where you are"}    
                    />
                </Map>
          </div>
        )
    }
}

// const DeliveryMap = withGoogleMap((props) =>
//   <Map
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </Map>
// )


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(DeliveryMap);