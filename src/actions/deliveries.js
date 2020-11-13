import axios from 'axios';

//https://maps.googleapis.com/maps/api/place/autocomplete/json?input=1600+Amphitheatre&key=<API_KEY>&sessiontoken=1234567890

const autocompleteURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" // <= concat params at the end

const distanceURL = `https://maps.googleapis.com/maps/api/distancematrix/outputFormat?json`

export const getMileage = (data, key) => {
    // return async (dispatch) => {
    //     const response = await axios.get
    // }
    console.log(data, key)
}

export const autoComplete = (data, key) => {
    let address = data.address.split(' ').join('+');
    let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${key}`
    // debugger
    // return async (dispatch) => {
    //     // debugger
    //     dispatch({ type: 'START_LOAD'})
    //     const response = await axios.get(url)
    //     console.log(response)
    //     const place = response.data
    //     console.log(place)
    // }
    axios.get(url).then(r => console.log(r))
}
