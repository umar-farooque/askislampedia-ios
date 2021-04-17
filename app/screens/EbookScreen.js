import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import AppText from "../components/AppText";
import { WebView } from "react-native-webview";
import HTML from "react-native-render-html";
import table, { IGNORED_TAGS } from "@native-html/table-plugin";
import useApi from "../hooks/useApi";
import articles from "../api/articles";

const htmlProps = {
  WebView,
  renderers: {
    table,
  },
  ignoredTags: IGNORED_TAGS,
};
let tagsStyles = {
  p: { fontSize: 18, marginVertical: 5 },
  table: { width: Dimensions.get("screen").width },
  h2: { fontSize: 22, fontWeight: "800" },
  h1: { fontSize: 24 },
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
function EbookScreen({ navigation }) {
  const contentWidth = useWindowDimensions().width;
  let getArticles = useApi(articles.getDetails);

  useEffect(() => {
    getArticles.request();
  }, []);
  let handleLinkPress = (href) => {
    //testing
    let url = href.split("/");
    const api =
      "https://askislampedia.com/Quranic-portlet/rest/getTitles/English_wiki/";
    url = url[url.length - 1];
    console.log(api + url.split("+").join("%20"));
    let newUrl = api + url.split("+").join("%20");
    if (href.includes("http") || href.includes("https")) {
      navigation.navigate("Webview", {
        title: "Title",
        url: newUrl,
      });
    }
  };
  let handleAlterNode = (node) => {
    const { name, parent } = node;
    // console.log(node);
    if (name === "a") {
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      console.log(node);
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      node.attribs = {
        ...(node.attribs || {}),
        href: "https://www.askislampedia.com/wiki",
      };
      return node;
    }
  };
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <AppText>Ebook Screen </AppText>
        <HTML
          {...htmlProps}
          source={{ html: getArticles.data }}
          contentWidth={contentWidth}
          tagsStyles={tagsStyles}
          onLinkPress={(evt, href) => handleLinkPress(href)}
          ignoredTags={[...IGNORED_TAGS, "img", "hr", "table"]}
          // onParsed={(result) => console.log("======================>", result)}
          // alterNode={handleAlterNode}
          containerStyle={{ flex: 1, padding: 5, marginTop: 15 }}
          computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
        />
        {/* <WebScrollView source={{ uri: "https://www.askislampedia.com/wiki" }} /> */}
      </ScrollView>
    </>
  );
}

export default EbookScreen;
