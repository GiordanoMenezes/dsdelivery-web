import axios from 'axios';
import { OrderDTO } from './models/OrderDTO';

const URL_API = 'https://dsdelivery-giordano.herokuapp.com';

export function listProducts() {
  return axios.get(`${URL_API}/products`);
}

export function fetchLocalMapBox(location: string) {
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`);
}

export function saveOrder(order: OrderDTO) {
  return axios.post(`${URL_API}/orders`, order);
}
