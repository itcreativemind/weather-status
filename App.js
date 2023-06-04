import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BottomNavigation from "./src/navigation/bottomNavigation";
import LocatioError from "./src/components/locationError/locationError";

import ErrorBoundary from "./src/components/errorBoundry/errorBoundary";

const setDeviceLocation = async (location) => {
  await AsyncStorage.setItem("location", JSON.stringify(location));
};

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setDeviceLocation(location);
      setLocation(location);
    })();
  }, []);

  return (
    <>
      <ErrorBoundary>
        {errorMsg ? (
          <LocatioError />
        ) : location ? (
          <BottomNavigation />
        ) : (
          <View style={styles.container}>
            <Text>Please Wait ...</Text>
          </View>
        )}
      </ErrorBoundary>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
