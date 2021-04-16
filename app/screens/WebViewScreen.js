import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import AppText from "../components/AppText";

function WebViewScreen({ navigation, route }) {
  //   console.log(route);
  let { url } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
}

export default WebViewScreen;
