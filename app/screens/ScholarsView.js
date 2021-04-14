import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function ScholarsView(props) {
  return (
    <View style={styles.container}>
      <AppText> Scholars View Page</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ScholarsView;
