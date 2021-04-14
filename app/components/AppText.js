import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style, lines, onPress, ref, onLayout }) {
  return (
    <Text
      onLayout={onLayout}
      onPress={onPress}
      ref={ref}
      style={[styles.text, style]}
      numberOfLines={lines}
      ellipsizeMode="tail"
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
