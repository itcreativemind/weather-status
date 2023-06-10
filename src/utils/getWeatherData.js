import getLatLong from "./getLatLong";
import { CURRENT_WEATHER_API } from "../config/constants";

const getWeatherData = async () => {
  const { lat, long } = await getLatLong();
  const response = await fetch(
    `${CURRENT_WEATHER_API}?lat=${lat}&lon=${long}&APPID=8cba239c8acd45b83384d865aa011ede&units=metric`
  );
  const jsonData = await response.json();

  return jsonData;
};

export default getWeatherData;
