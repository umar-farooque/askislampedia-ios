import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

function AnsweringAlegations(props) {
  return (
    <View style={styles.container}>
      <AppText> Answering Alegations Page</AppText>
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
export default AnsweringAlegations;
