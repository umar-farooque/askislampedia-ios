import React, { useRef } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import AppText from "../components/AppText";

function WebViewScreen({ navigation, route }) {
  //   console.log(route);
  let { url } = route.params;
  let webviewRef = useRef();
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: url }}
        ref={webviewRef}
        onNavigationStateChange={(navState) => {
          if (navState.url.includes("http" || "https")) {
            navigation.setOptions({ title: navState.title });
          }
          //  else {
          //   Linking.openURL(navState.url);
          // }
        }}
      />
    </View>
  );
}

export default WebViewScreen;
