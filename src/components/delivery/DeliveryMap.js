import React, { Component } from 'react';
import '../../stylesheets/delivery/deliverymap.css';
import Loading from '../static/Loading';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polygon} from 'google-maps-react';
import { getGeocode, establishBounds } from '../../actions/deliveries';
require('dotenv').config();

class DeliveryMap extends Component {
  componentDidMount(){
    establishBounds(this.state.boundaries);
  }

  state = {
    viewport: {
      latitude: 30.146626,
      longitude: -92.035548,
      width: "85vw",
      height: "75vh",
      zoom: 11
    },
    location: {
      address: "",
      city: "Lafayette"
    },
    origins: {
      lat: 30.146626,
      lng: -92.035548
    },
    boundaries: [  
      {lat: 30.150839490122195, lng: -92.09357565868899},
      {lat: 30.10956547664899, lng: -92.05924338426283},
      {lat: 30.084911616736843, lng: -91.9905788354105},
      {lat: 30.131540840461998, lng: -91.96482962959087},
      {lat: 30.176960877413638, lng: -92.00190848597113},
      {lat: 30.206932573334075, lng: -92.0379573741186}
    ],
    destinations: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  handleChange = event => {
    this.setState({
      location: {
        ...this.state.location,
        address: event.target.value
      }
    })
  }

  setCity = event => {
    this.setState({ 
      location: {
        ...this.state.location,
        city: event.target.value
      }
    })
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
    // debugger
  }

  handleSubmit = event => {
    event.preventDefault();
    getGeocode(this.state.location).then(dest => this.setState({
      ...this.state,
      destinations: [...this.state.destinations, dest]
    }))
  }

  renderDestinations = () => {
    if (this.state.destinations.length > 0) {
      return this.state.destinations.map( destination => {
        return <Marker 
        position={destination} 
        icon={{
          url: './marker.png',
          scaledSize: new this.props.google.maps.Size(37, 37)
        }}
        />
      })
    }
  }

    render() {
      const loading = this.props.loading
      const mapStyles = {
        height: "70%",
        width: "50%",
        position: "static"
      }
      // const bounds = new this.props.google.maps.LatLngBounds();
      // for (let i = 0; i < this.state.boundaries.length; i++) {
      //   bounds.extend(this.state.boundaries[i]);
      // }
        return (
          loading ? <Loading /> :
          <section className="dash-container">
            <header className="dash-header">
              <h3>Deliveries</h3>
            </header>

            <div className="dash-content">
              <form className="new-user-form" onSubmit={this.handleSubmit}>
                <input 
                  type="text" 
                  name="address"
                  placeholder="Enter address..." 
                  onChange={this.handleChange}
                />
                <select id="city-select" value={this.state.city} onChange={this.setCity}>
                  <option value="Lafayette">Lafayette</option>
                  <option value="Youngsville">Youngsville</option>
                  <option value="Broussard">Broussard</option>
                </select>

                <input className="new-user-sbmt" type="submit" value="Check Location" />              
              </form>


              <div className="map-container">
                <Map
                  google={this.props.google}
                  initialCenter={this.state.origins}
                  zoom={12}
                  style={mapStyles}
                  className={"map"}
                >
                  {/* <Polygon
                    path={this.state.boundaries}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2} /> */}
                  <Marker 
                    position={this.state.origins}
                    name={"Province"}
                    title={"You are here"}
                    onClick={this.onMarkerClick}
                    icon={{
                      url: '/icon.png',
                      scaledSize: new this.props.google.maps.Size(37, 37)
                    }}
                  >
                      <InfoWindow
                        visible={this.state.showingInfoWindow}
                        marker={this.state.activeMarker}
                      >
                        <div className="marker-info">
                          <p>{this.state.selectedPlace.name}</p>
                          <p>{this.state.selectedPlace.title}</p>
                        </div>
                      </InfoWindow>
                  </Marker>
                  {this.renderDestinations()}
                {/* {this.state.boundaries.map(location => {
                  return <Marker position={location} icon={{url: '/marker.png', scaledSize: new this.props.google.maps.Size(37, 37)}} />
                })} */}
                </Map>
            </div>
            <br />
                <div className="user-info-title">
                  Plan Your Route
                </div>
                <div className="user-info-content">
                  <input type="text" placeholder="Enter address..." name="destination" />
                  <br />
                  <button className="new-user-sbmt">Add Another Destination</button>
                </div>
                <button className="new-user-sbmt">Finalize Route</button>
              </div>
          </section>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(DeliveryMap);