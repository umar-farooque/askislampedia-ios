import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Search Screen </AppText>
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
export default SearchScreen;
