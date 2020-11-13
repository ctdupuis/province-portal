import React, { Component } from 'react';
import { 
  Map,
  GoogleApiWrapper,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow
 } from 'google-maps-react';
import { getMileage, autoComplete } from '../../actions/deliveries';
import '../../stylesheets/delivery/deliverymap.css';
import DestinationInput from './DestinationInput';
require('dotenv').config();

class DeliveryMap extends Component {

  state = {
    // address: {
    //   street: '',
    //   city: '',
    //   state: 'LA',
    //   zipCode: ''
    // },
    address: '',
    origins: { lat: 30.146626, lng: -92.035548} 
  }

  handleChange = event => {
    // this.setState({ 
    //   ...this.state,
    //   address: {
    //     ...this.state.address,
    //     [event.target.name]: event.target.value}
    // })
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    autoComplete(this.state, process.env.REACT_APP_GOOGLE_API_KEY)
  }

  saveDestination = event => {
    this.state.destinations.push(event.target.value)
  }

    render() {
        return (
            <div className="map-container">
              <form className="destination-input" onSubmit={this.handleSubmit}>
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
                      icon={{
                        url: './icon.png',
                        scaledSize: new this.props.google.maps.Size(37, 37) 
                      }}
                    />
                </Map>
          </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(DeliveryMap);