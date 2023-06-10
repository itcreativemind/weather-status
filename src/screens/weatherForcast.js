import { useEffect, useState } from "react";
import { getWeatherForcastData } from "@utils";

import WeatherForcast from "../components/weatherForcast/weatherForcast";
import Loader from "../components/Loader/loader";

const WeatherForcastScreen = () => {
  const [weatherForcastData, setWeatherForcastData] = useState(null);

  useEffect(() => {
    getWeatherForcastData()
      .then((res) => {
        setWeatherForcastData(res);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  return weatherForcastData ? (
    <WeatherForcast weatherForcastData={weatherForcastData} />
  ) : (
    <Loader />
  );
};

export default WeatherForcastScreen;
