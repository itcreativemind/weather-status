import { View, Text } from "react-native";
import styles from "./errorMessage.style";

const ErrorMessage = ({ title, message }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </>
  );
};

export default ErrorMessage;
