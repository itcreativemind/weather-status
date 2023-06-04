import getLatLong from "./getLatLong";

const getWeatherData = async () => {
    const { lat, long } = await getLatLong();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=8cba239c8acd45b83384d865aa011ede&units=metric`);
    const jsonData = await response.json();

    return jsonData;
}

export default getWeatherData;