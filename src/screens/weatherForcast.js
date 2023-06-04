import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import WeatherForcast from "../components/weatherForcast/weatherForcast";

const WeatherForcastScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <WeatherForcast />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1, 
       justifyContent: 'center', 
       alignItems: 'center'
    },
    text: {
        color: "#276221"
    }
})

export default WeatherForcastScreen;