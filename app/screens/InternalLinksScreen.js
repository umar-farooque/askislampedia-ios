import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";

import useApi from "../hooks/useApi";
import getArticles from "../api/articles";
import { WebView } from "react-native-webview";
import HTML from "react-native-render-html";
import table, { IGNORED_TAGS } from "@native-html/table-plugin";
import colors from "../utils/colors";

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
    textAlign: "left",
    fontWeight: "400",
  },
  h2: { fontSize: 21, fontWeight: "500", marginVertical: 5 },
  h1: {
    fontSize: 22,
    fontWeight: "600",
    marginVertical: 5,
  },

  ol: { marginTop: 20 },

  li: { fontSize: 18 },
};
let ignoreTags = [
  ...IGNORED_TAGS,
  "img",
  "hr",
  "table",
  "font-family",
  "letter-spacing",
];
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

  useEffect(() => {
    getArticlesApi.request();
  }, []);

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
      props.navigation.navigate("Webview", { url: href });
    } else {
      console.log(href);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {getArticles.loading && <ActivityIndicator color="black" size="large" />}
      <HTML
        {...htmlProps}
        source={{ html: getArticlesApi.data }}
        contentWidth={contentWidth}
        tagsStyles={tagsStyles}
        onLinkPress={(evt, href) => handleLinkPress(href)}
        ignoredTags={ignoreTags}
        containerStyle={{ flex: 1, padding: 5, marginTop: 15 }}
        computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.backgroundColor },
});

export default InternalLinksScreen;
