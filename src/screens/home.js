import React from "react";
import { Text, View } from 'react-native';

import TodayWeather from "../components/todayWeather/todayWeather";

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TodayWeather />
        </View>
    )
}

export default HomeScreen;