import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    color: colors.error,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default styles;
