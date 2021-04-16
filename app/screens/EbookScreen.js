import React from "react";
import { View } from "react-native";
import AppText from "../components/AppText";
import { WebView } from "react-native-webview";

function EbookScreen(props) {
  return (
    <>
      <View>
        <AppText>Ebook Screen </AppText>
        {/* <WebView source={{ uri: "https://www.askislampedia.com/wiki" }} /> */}
      </View>
    </>
  );
}

export default EbookScreen;
