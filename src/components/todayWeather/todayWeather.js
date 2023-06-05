import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { getWeatherData } from "@utils";

import Loader from "../Loader/loader";

import styles from "./todayWeather.style";

const TodayWeather = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getWeatherData()
      .then((res) => {
        const { main, weather } = res;
        const { description, icon } = weather[0];
        setLocation({ ...main, description, icon });
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  return location ? (
    <View style={styles.container}>
      <Text style={styles.title}>Current Weather</Text>
      <View>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `http://openweathermap.org/img/w/${location.icon}.png`,
          }}
        />
        <Text>{location.description}</Text>
        <Text style={styles.temprature}>
          {location.temp}
          {"\u00b0"}C
        </Text>
        <View style={styles.tempContainer}>
          <Text style={styles.temp}>
            Min : {location.temp_min}
            {"\u00b0"}C
          </Text>
          <Text style={styles.temp}>
            Max : {location.temp_max}
            {"\u00b0"}C
          </Text>
        </View>
      </View>
    </View>
  ) : (
    <Loader />
  );
};

export default TodayWeather;
