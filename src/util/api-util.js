import axios from "axios";

export function getWeatherByCoordinates(coordinates = "42.3601,-71.0589") {
  // TODO: fix removal of cors url
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API_KEY}/${coordinates}`, {
        mode: 'no-cors'
      }
    )
    .then(Response => {
      return Response.data;
    })
    .catch(error => console.error(error));
}

export function getCoordinatesByIp() {
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
      `https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_OPENCAGE_API_KEY}&q=${address}`
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
      `https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_OPENCAGE_API_KEY}&q=${latitude}%2C${longtidude}&pretty=1`
    )
    .then(Response => {
      return Response.data;
    })
    .catch(error => console.error(error));
}
