import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    color: colors.error,
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    textAlign: "center",
  },
});

export default styles;
