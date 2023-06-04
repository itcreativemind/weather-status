import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  temprature: {
    fontSize: 60,
    color: "#FF6600",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  weatherIcon: {
    width: 100,
    height: 100,
    alignSelf: "flex-end",
    marginBottom: -20,
  },
  tempContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.primaryColor,
    color: colors.white,
  },
  temp: {
    color: colors.white,
  },
});

export default styles;
