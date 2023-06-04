import AsyncStorage from "@react-native-async-storage/async-storage";

const getLatLong = async () => {
    let location = await AsyncStorage.getItem("location");
    location = JSON.parse(location);
    

    return {
        lat: location.coords.latitude,
        long: location.coords.longitude
    };
}

export default getLatLong;

