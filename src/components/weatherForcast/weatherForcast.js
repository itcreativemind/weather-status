import { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { getWeatherForcastData } from '@utils';

import styles from './weatherForcast.style';

const WeatherForcast = () => {
    const [ weatherForcastData, setWeatherForcastData ] = useState(null);

    useEffect(() => {
        try {
            getWeatherForcastData().then( res => {
                setWeatherForcastData(res);
            })
        }
        catch(error) {
            throw(error);
        }
    }, [])
    
    return (
        weatherForcastData ?
        (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                {
                        weatherForcastData.map((ele, index)=> {
                            return(
                                <View style={styles.weatherForcastTile} key={`forcastData${index}`}>
                                    <Text style={styles.date}>{ele.date}</Text>
                                    <View style={styles.tempContainer}>
                                        <Text style={styles.temp}>Min: {ele.min_temp}{'\u00b0'}C</Text>
                                        <Text style={styles.temp}>Max: {ele.max_temp}{'\u00b0'}C</Text>
                                    </View>
                                </View>
                            )
                        })
                }
                </View>
            </ScrollView>
        )
        : <Text>Please wait...</Text>
    )
}

export default WeatherForcast;