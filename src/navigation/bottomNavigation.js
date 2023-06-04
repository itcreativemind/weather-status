import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/home';
import WeatherForcastScreen from '../screens/weatherForcast';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen 
        name="WeatherForcast" 
        component={WeatherForcastScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weather-lightning-rainy" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BottomNavigation =  () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default BottomNavigation;