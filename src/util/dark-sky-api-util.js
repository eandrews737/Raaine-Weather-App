import axios from "axios";
import { DARK_SKY_API_KEY } from "../env.js";

export function getWeatherByCoordinates(coordinates = "42.3601,-71.0589") {
  return axios
    .get(
      `https://cors.io/?https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${coordinates}`
    )
    .then(Response => {
      return Response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
