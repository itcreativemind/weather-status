import getLatLong from "./getLatLong";

const parseForcastData = (weatherForcastData) => {
    const tempForcastData = {},
        forcastData = [];
    
    weatherForcastData.list.forEach(element => {
        const date = element.dt_txt.split(" ")[0];

        tempForcastData[date] = tempForcastData[date] || [];
        tempForcastData[date].push(element.main.temp);
    });

    Object.keys(tempForcastData).forEach(key => {
        forcastData.push({
            date: key,
            min_temp: Math.min(...tempForcastData[key]),
            max_temp: Math.max(...tempForcastData[key])
        })
    });

    return forcastData;
}

const getWeatherForcastData = async () => {
    const { lat, long } = await getLatLong();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=8cba239c8acd45b83384d865aa011ede&units=metric`);
    const weatherForcastData = await response.json();

    return parseForcastData(weatherForcastData);
}

export default getWeatherForcastData;