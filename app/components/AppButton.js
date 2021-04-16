import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={[styles.myButton]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  myButton: {
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "70%",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  // #006ee6
  text: {
    color: "black",
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
export default AppButton;
