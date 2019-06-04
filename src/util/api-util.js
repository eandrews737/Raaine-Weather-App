import axios from "axios";
import { DARK_SKY_API_KEY, OPENCAGE_API_KEY } from "../env.js";

export function getWeatherByCoordinates(coordinates = "42.3601,-71.0589") {
  return axios
    .get(
      `https://cors.io/?https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${coordinates}`
    )
    .then(Response => {
      return Response.data;
    })
    .catch(error => console.error(error));
}

export function getCoordinatesbyIp() {
  return axios
    .get(`http://ip-api.com/json`)
    .then(Response => {
      return Response.data;
    })
    .catch(error => console.error(error));
}

// forward geocoding
// city -> coordinates converter
export function getCoordinatesFromCity(address) {
  return axios
    .get(
      `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGE_API_KEY}&q=${address}`
    )
    .then(Response => {
      return Response.data;
    })
    .catch(error => console.error(error));
}

// reverse geocoding
// coordinates -> city converter
export function getCityFromCoordinates(latitude, longtidude) {
  return axios
    .get(
      `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGE_API_KEY}&q=${latitude}%2C${longtidude}&pretty=1`
    )
    .then(Response => {
      return Response.data;
    })
    .catch(error => console.error(error));
}
