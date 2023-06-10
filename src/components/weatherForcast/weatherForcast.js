import { ScrollView, View, Text } from "react-native";

import styles from "./weatherForcast.style";

const WeatherForcast = ({ weatherForcastData }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {weatherForcastData.map((ele, index) => {
          return (
            <View style={styles.weatherForcastTile} key={`forcastData${index}`}>
              <Text style={styles.date}>{ele.date}</Text>
              <View style={styles.tempContainer}>
                <Text style={styles.temp}>
                  Min: {ele.min_temp}
                  {"\u00b0"}C
                </Text>
                <Text style={styles.temp}>
                  Max: {ele.max_temp}
                  {"\u00b0"}C
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default WeatherForcast;
