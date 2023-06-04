import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./errorBoundry.style";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Ohhh... There is an error</Text>
          <Image
            source={require("../../../assets/sad_face.png")}
            style={styles.image}
          />
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
