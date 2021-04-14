import React from "react";
import { View, StyleSheet } from "react-native";

function Seperator({ style }) {
  return <View style={[styles.seperator, style]} />;
}
const styles = StyleSheet.create({
  seperator: {
    backgroundColor: "#E7E6E6",
    width: "100%",
    height: 0.5,
  },
});

export default Seperator;
