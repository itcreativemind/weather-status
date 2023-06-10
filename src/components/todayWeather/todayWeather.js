import { View, Text, Image } from "react-native";

import styles from "./todayWeather.style";

const TodayWeather = ({ currentWeatherData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.weatherData}>
        <Text style={styles.title}>Current Weather</Text>
        <View>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `http://openweathermap.org/img/w/${currentWeatherData.icon}.png`,
            }}
          />
          <Text>{currentWeatherData.description}</Text>
          <Text style={styles.temprature}>
            {currentWeatherData.temp}
            {"\u00b0"}C
          </Text>
          <View style={styles.tempContainer}>
            <Text style={styles.temp}>
              Min : {currentWeatherData.temp_min}
              {"\u00b0"}C
            </Text>
            <Text style={styles.temp}>
              Max : {currentWeatherData.temp_max}
              {"\u00b0"}C
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodayWeather;
