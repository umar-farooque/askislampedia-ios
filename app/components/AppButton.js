import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.myButton, { backgroundColor: "black" }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  myButton: {
    backgroundColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "70%",
    marginVertical: 10,
  },
  // #006ee6
  text: {
    color: "white",
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
export default AppButton;
