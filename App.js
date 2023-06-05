import { useState, useEffect } from "react";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BottomNavigation from "./src/navigation/bottomNavigation";
import LocatioError from "./src/components/locationError/locationError";
import Loader from "./src/components/Loader/loader";
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
          <Loader />
        )}
      </ErrorBoundary>
    </>
  );
}
