import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

import { Icon } from "react-native-elements";

function ReadMoreIcon({ onPress }) {
  return (
    <TouchableOpacity style={styles.container}>
      <AppText style={styles.text} onPress={onPress}>
        Read More
      </AppText>
      <Icon
        name="arrow-right-alt"
        type="materialicons"
        color="#006ee6"
        size={30}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: { marginVertical: 10, color: "#006ee6", fontSize: 20 },
});
// #365DCE
export default ReadMoreIcon;
