import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function BasicIslamInfo(props) {
  return (
    <View style={styles.container}>
      <AppText> Basic Islam Info Page</AppText>
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
export default BasicIslamInfo;
