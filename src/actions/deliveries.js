import axios from 'axios';
require('dotenv').config();

//https://maps.googleapis.com/maps/api/place/autocomplete/json?input=1600+Amphitheatre&key=<API_KEY>&sessiontoken=1234567890

// const autocompleteURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" // <= concat params at the end

// const distanceURL = `https://maps.googleapis.com/maps/api/distancematrix/outputFormat?json`

export const getMileage = (data, key) => {
    // return async (dispatch) => {
    //     const response = await axios.get
    // }
    console.log(data, key)
}

export const getGeocode = () => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=446+Failla+Rd,+Lafayette,+LA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    return fetch(url).then(r => r.json()).then(j => {
        let response = j.results[0].geometry
        let coords = { lat: response.location.lat, lng: response.location.lng}
        console.log(coords)
    })
}

export const getDistance = (data, key) => {
    let address = data.address.split(' ').join('+');
    let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${key}`
    debugger
    axios.get(url).then(r => console.log(r))
}
