import { View, Text } from "react-native";
import styles from "./loader.style";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text>Please Wait ...</Text>
    </View>
  );
};

export default Loader;
