import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";

function TopReadCard({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <AppText>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    overflow: "hidden",
  },
  content: {
    width: "100%",
    // height: 60,
    backgroundColor: "white",
    padding: 17,
    justifyContent: "center",
  },
});

export default TopReadCard;
