import axios from 'axios';

const URL_API = 'https://dsdelivery-giordano.herokuapp.com';

export function listProducts() {
  return axios.get(`${URL_API}/products`);
}

export function fetchLocalMapBox(location: string) {
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`);
}
