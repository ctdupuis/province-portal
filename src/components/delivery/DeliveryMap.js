import React, { Component } from "react";
import "../../stylesheets/delivery/deliverymap.css";
import Loading from "../static/Loading";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
  Polyline
} from "google-maps-react";
import { getGeocode } from "../../actions/deliveries";
import DeliveryEntry from "./DeliveryEntry";
require("dotenv").config();


class DeliveryMap extends Component {

  state = {
    location: {
      address: "",
      city: "Lafayette",
    },
    origin: {
      place_id: "ChIJpeD3NYadJIYRTEivvGoWk-E",
      position: {
        lat: 30.146626,
        lng: -92.035548,
      },
    },
    boundaries: [
      { lat: 30.150839490122195, lng: -92.09357565868899 },
      { lat: 30.10956547664899, lng: -92.05924338426283 },
      { lat: 30.084911616736843, lng: -91.9905788354105 },
      { lat: 30.131540840461998, lng: -91.96482962959087 },
      { lat: 30.176960877413638, lng: -92.00190848597113 },
      { lat: 30.206932573334075, lng: -92.0379573741186 },
    ],
    bounds: [
      { lat: 30.15059, lng: -92.093792 },
      { lat: 30.130907, lng: -92.055522 },
      { lat: 30.125164, lng: -92.055656 },
      { lat: 30.116375, lng: -92.063031 },
      { lat: 30.108729, lng: -92.059652 },
      { lat: 30.109214, lng: -92.015603 },
      { lat: 30.093794, lng: -92.015015 },
      { lat: 30.084418, lng: -91.990615 },
      { lat: 30.135238, lng: -91.990432 },
      { lat: 30.160673, lng: -91.991078 },
      { lat: 30.169076, lng: -91.998951 },
      { lat: 30.174173, lng: -92.000073 },
      { lat: 30.176749, lng: -92.002345 },
      { lat: 30.180394, lng: -92.004057 },
      { lat: 30.190583, lng: -92.015741 },
      { lat: 30.198923, lng: -92.016466 },
      { lat: 30.201017, lng: -92.015379 },
      { lat: 30.20182, lng: -92.018188 },
      { lat: 30.199187, lng: -92.026449 },
      { lat: 30.207341, lng: -92.038274 },
      { lat: 30.201508, lng: -92.053804 },
      { lat: 30.194459, lng: -92.058067 },
      { lat: 30.171723, lng: -92.080815 },
      { lat: 30.15059, lng: -92.093792 },
    ],
    destinations: [],
    dest: { lat: 30.160673, lng: -91.991078 },
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    route: [],
  };

  constructUrl = () => {
    let str = ``;
    this.state.boundaries.forEach((bound) => {
      str.concat(`${bound.lat},${bound.lng}`);
    });
  };

  handleChange = (event) => {
    this.setState({
      location: {
        ...this.state.location,
        address: event.target.value,
      },
    });
  };

  setCity = (event) => {
    this.setState({
      location: {
        ...this.state.location,
        city: event.target.value,
      },
    });
  };

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    getGeocode(this.state.location).then((dest) =>
      this.setState({
        ...this.state,
        destinations: [...this.state.destinations, dest],
      })
    );
  };

  renderDestinations = () => {
    if (this.state.destinations.length > 0) {
      return this.state.destinations.map((destination) => {
        return (
          <Marker
            key={destination.place_id}
            name={destination.address}
            position={destination.position}
            onClick={this.onMarkerClick}
            icon={{
              url: "./marker.png",
              scaledSize: new this.props.google.maps.Size(37, 37),
            }}
          />
        );
      });
    }
  };

  render() {
    const loading = this.props.loading;
    const mapStyles = {
      height: "70%",
      width: "50%",
      position: "static",
    };

    return loading ? (
      <Loading />
    ) : (
      <section className="dash-container">
        <div className="dash-content">
          <form className="new-user-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="address"
              placeholder="Enter address..."
              onChange={this.handleChange}
            />
            <select
              id="city-select"
              value={this.state.city}
              onChange={this.setCity}
            >
              <option value="Lafayette">Lafayette</option>
              <option value="Youngsville">Youngsville</option>
              <option value="Broussard">Broussard</option>
            </select>

            <input
              className="new-user-sbmt"
              type="submit"
              value="Check Location"
            />
          </form>

          <div className="map-container">
            <Map
              google={this.props.google}
              initialCenter={this.state.origin.position}
              zoom={12}
              style={mapStyles}
              className={"map"}
            >
              <Polyline
                path={this.state.bounds}           
                geodesic={true}
                strokeColor="#319847"
                strokeOpacity={0.8}
                strokeWeight={2}
              />
              <Marker
                position={this.state.origin.position}
                name={"Province Pharmacy"}
                title={"You are here"}
                onClick={this.onMarkerClick}
                icon={{
                  url: "/icon.png",
                  scaledSize: new this.props.google.maps.Size(37, 37),
                }}
              />
              {this.renderDestinations()}
              <InfoWindow
                visible={this.state.showingInfoWindow}
                marker={this.state.activeMarker}
                onClose={this.onClose}
              >
                <div className="marker-info">
                  <h4>{this.state.selectedPlace.name}</h4>
                  <button className="green-btn" onClick={this.addToRoute}>Add to route</button>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </div>
        <DeliveryEntry 
          finalizeRoute={this.props.finalizeRoute}
        />
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(DeliveryMap);
