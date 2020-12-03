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

export const getGeocode = async function(location){
    let address = location.address.split(' ').join('+');
    let city = location.city
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address},+${city},+LA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    const response = await axios.get(url)
    const data = response.data.results[0].geometry.location
    const coords = { lat: data.lat, lng: data.lng}
    return coords
}

export const getDistance = (data, key) => {
    let address = data.address.split(' ').join('+');
    let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${key}`
    debugger
    axios.get(url).then(r => console.log(r))
}
