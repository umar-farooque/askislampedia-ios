import React, { useEffect, useState, useRef } from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import ScrollToTop from "../components/ScrollToTop";
import useApi from "../hooks/useApi";
import articles from "../api/articles";
import AppButton from "../components/AppButton";

import HTML from "react-native-render-html";
import table, { IGNORED_TAGS } from "@native-html/table-plugin";
import WebView from "react-native-webview";

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

function DetailScreen({ route }) {
  let url = route.params.title;
  // console.log(route.params);
  let scroll = useRef();

  // const contentWidth = useWindowDimensions().width;
  // const getDetails = useApi(() => articles.getDetails(url));

  let [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   getDetails.request();
  // }, []);

  let handleScollDrag = () => setVisible(true);
  let handleScrollToTop = () => {
    scroll.current.scrollTo({ x: 0, y: 0, animated: true });
    setVisible(false);
  };

  let handleMomentumScrollEnd = (event) => {
    if (!event.nativeEvent.contentOffset.y > 0) setVisible(false);
  };
  // console.log("---------->", getDetails.data);
  return (
    <>
      <ScrollView
        ref={scroll}
        style={styles.container}
        onScrollBeginDrag={handleScollDrag}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        {/* {getDetails.loading && (
          <ActivityIndicator
            animating={getDetails.loading}
            size="large"
            color="blue"
          />
        )}
        {getDetails.error && !getDetails.loading && (
          <>
            <AppText>Couldn't load Listings</AppText>
            <AppButton title="Retry" onPress={() => getDetails.request()} />
          </>
        )} */}
        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <AppText style={styles.heading}>{url}</AppText>
          </View>
          <AppText style={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus Ipsum.
          </AppText>
          <AppText style={styles.paragraph}>
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </AppText>
          <AppText style={styles.paragraph}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </AppText>
          <View style={styles.buttonContainer}>
            <AppButton title="Read More" />
          </View>
        </View>

        {/* <View style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
          
        </View> */}
        {/* <HTML
          ,backgroundColor:"white"{...htmlProps}
          source={{ html: getDetails.data }}
          contentWidth={contentWidth}
          tagsStyles={tagsStyles}
          ignoredTags={[...IGNORED_TAGS, "img", "hr"]}
          containerStyle={{ flex: 1, padding: 5, marginTop: 15 }}
          computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
        /> */}
      </ScrollView>
      {visible && <ScrollToTop onPress={handleScrollToTop} />}
    </>
  );
}
const styles = StyleSheet.create({
  buttonContainer: { justifyContent: "center", alignItems: "center" },
  container: { flex: 1, padding: 10 },
  card: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 25,
    marginBottom: 20,
  },
  headingContainer: { justifyContent: "center", alignItems: "center" },
  heading: { fontSize: 25, fontWeight: "700", textAlign: "center" },
  paragraph: { textAlign: "justify", fontSize: 20, marginVertical: 10 },
});
export default DetailScreen;
