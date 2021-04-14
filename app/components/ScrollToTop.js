import React from "react";
import { View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

function ScrollToTop({ onPress }) {
  return (
    <View style={styles.container} onPress={onPress}>
      <Icon
        name="arrow-circle-up"
        type="font-awesome"
        color="black"
        size={40}
        onPress={onPress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get("window").height - 200,
    marginLeft: Dimensions.get("screen").width - 60,
    height: 60,
    width: 60,
    // backgroundColor: "white",
    opacity: 0.5,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ScrollToTop;
