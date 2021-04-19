import React, { useEffect } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import AppText from "../components/AppText";
import useApi from "../hooks/useApi";
import getArticles from "../api/articles";
import { WebView } from "react-native-webview";
import HTML from "react-native-render-html";
import table, { IGNORED_TAGS } from "@native-html/table-plugin";

const htmlProps = {
  WebView,
  renderers: {
    table,
  },
  ignoredTags: IGNORED_TAGS,
};
let tagsStyles = {
  p: {
    fontSize: 15,
    marginVertical: 5,
    textAlign: "justify",
    fontWeight: "300",
  },
  table: { width: Dimensions.get("screen").width },
  h2: { fontSize: 21, fontWeight: "500", marginVertical: 5 },
  h1: { fontSize: 24, fontWeight: "600", marginVertical: 5 },
  ol: { marginTop: 20 },
  th: { textAlign: "left" },
  li: { fontSize: 18 },
};
function computeEmbeddedMaxWidth(contentWidth, tagName) {
  if (tagName === "img") {
    return Math.min(contentWidth, 500);
  }
  return contentWidth;
}

function InternalLinksScreen(props) {
  const contentWidth = useWindowDimensions().width;
  let url = props.route.params.url;
  console.log(url);
  let getArticlesApi = useApi(() => getArticles.getDetails(url));
  let handleLinkPress = (href) => {
    let url = href.split("/");
    url = url[url.length - 1];
    if (url.includes("#")) url = url.split("#")[0];
    let newUrl = url.split("+").join("%20");
    let title = decodeURI(url).split("+").join(" ");
    console.log("==>", newUrl);
    let quran = "http://www.askislampedia.com/quran/-/view";
    if (href.includes("askislampedia") && !href.includes(quran)) {
      props.navigation.navigate("Next", {
        title,
        url: newUrl,
      });
    } else if (href.includes("http" || "https") && !href.includes(quran)) {
      props.navigation.navigate("Webview", { title: "title", url: href });
    } else {
      console.log(href);
    }
  };

  useEffect(() => {
    getArticlesApi.request();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <AppText>Internal Links Screen </AppText> */}
      {getArticles.loading && <ActivityIndicator color="black" size="large" />}
      <HTML
        {...htmlProps}
        source={{ html: getArticlesApi.data }}
        contentWidth={contentWidth}
        tagsStyles={tagsStyles}
        onLinkPress={(evt, href) => handleLinkPress(href)}
        ignoredTags={[
          ...IGNORED_TAGS,
          "img",
          "hr",
          "table",
          "font-family",
          "letter-spacing",
        ]}
        // onParsed={(result) => console.log("======================>", result)}
        // alterNode={handleAlterNode}
        containerStyle={{ flex: 1, padding: 5, marginTop: 15 }}
        computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
      />
    </ScrollView>
  );
}

export default InternalLinksScreen;
