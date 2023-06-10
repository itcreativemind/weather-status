import { useEffect, useState } from "react";
import { getWeatherData } from "@utils";

import TodayWeather from "../components/todayWeather/todayWeather";
import Loader from "../components/Loader/loader";

const HomeScreen = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  useEffect(() => {
    getWeatherData()
      .then((res) => {
        const { main, weather } = res;
        const { description, icon } = weather[0];
        setCurrentWeatherData({ ...main, description, icon });
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  return currentWeatherData ? (
    <TodayWeather currentWeatherData={currentWeatherData} />
  ) : (
    <Loader />
  );
};

export default HomeScreen;
