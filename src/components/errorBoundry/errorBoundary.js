import React from "react";
import { View, Image } from "react-native";

import styles from "./errorBoundry.style";

import ErrorMessage from "../errorMessage/errorMessage";
import { messages, images } from "@content";

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
          <ErrorMessage {...messages.appError} />
          <Image source={images.sadFace} style={styles.image} />
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
