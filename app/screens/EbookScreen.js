import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import AppText from "../components/AppText";
import { WebView } from "react-native-webview";
import HTML from "react-native-render-html";
import table, { IGNORED_TAGS } from "@native-html/table-plugin";
import useApi from "../hooks/useApi";
import articles from "../api/articles";
import { Ebooks } from "../utils/data";
import Seperator from "../components/Seperator";
import TopReadCard from "../components/TopReadCard";
import AppButton from "../components/AppButton";
import _ from "lodash";

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
  table: { width: Dimensions.get("screen").width },
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
let sortData = (array) => _.sortBy(array, ["title"]);
function EbookScreen({ navigation }) {
  let sortedData = sortData(Ebooks);
  let [data, setData] = useState([...sortedData.slice(0, 40)]);
  let [buttonVisible, setButtonVisible] = useState(true);
  let [page, setPage] = useState(1);

  let handleLinkPress = (href) => {
    //testing
    let url = href.split("/");
    const api =
      "https://askislampedia.com/Quranic-portlet/rest/getTitles/English_wiki/";
    url = url[url.length - 1];
    console.log(api + url.split("+").join("%20"));
    let newUrl = url.split("+").join("%20");
    if (
      (href.includes("http") || href.includes("https")) &&
      href.includes("askislampedia")
    ) {
      navigation.navigate("Internal Links", {
        title: "Internal Links Title",
        url: newUrl,
      });
    } else if (href.includes("http" || "https")) {
      props.navigation.navigate("Webview", { title: "title", url: href });
    } else {
      console.log(href);
    }
  };

  let loadMore = () => {
    let ITEMS_PER_PAGE = 40;

    const start = page * ITEMS_PER_PAGE;
    const end = (page + 1) * ITEMS_PER_PAGE;
    const newData = sortedData.slice(start, end); // here, we will receive next batch of the items

    if (sortedData.length - data.length <= ITEMS_PER_PAGE) {
      setButtonVisible(false);
    }
    if (sortedData.length <= data.length) return data;
    setData([...data, ...newData]);
    setPage(page + 1);
  };
  return (
    <>
      <ScrollView style={{ flex: 1, paddingHorizontal: 5 }}>
        <AppText>Ebook Screen </AppText>
        <View style={styles.ebookContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.title}
            renderItem={(item) => (
              <TopReadCard
                title={item.item.title}
                onPress={() =>
                  navigation.navigate("Webview", {
                    title: item.item.title,
                    url: item.item.main_url,
                  })
                }
              />
            )}
            ListFooterComponent={() =>
              buttonVisible && (
                <AppButton title="Load More" onPress={loadMore} />
              )
            }
            ListFooterComponentStyle={styles.listFooterComponentStyle}
            ItemSeparatorComponent={Seperator}
          />
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  ebookContainer: {
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 30,
  },
  listFooterComponentStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default EbookScreen;
