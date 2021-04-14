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
import Seperator from "../components/Seperator";

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
  let [posPara1, setPosPara1] = useState("");
  let [posPara2, setPosPara2] = useState("");
  let [posPara3, setPosPara3] = useState("");
  let [posButton, setPosButton] = useState("");
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
  let handlePara1 = (event) => {
    const { layout } = event.nativeEvent;
    setPosPara1(layout.y);
    // console.log("height:", layout.height);
    // console.log("width:", layout.width);
    // console.log("x:", layout.x);
    // console.log("y:", layout.y);
  };
  let handlePara2 = (event) => {
    const { layout } = event.nativeEvent;
    setPosPara2(layout.y);
  };
  let handlePara3 = (event) => {
    const { layout } = event.nativeEvent;
    setPosPara3(layout.y);
  };
  let handleButton = (event) => {
    const { layout } = event.nativeEvent;
    setPosButton(layout.y);
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
          <Seperator style={styles.seperator} />
          <AppText
            style={{ fontSize: 25, fontWeight: "bold", color: "green" }}
            onPress={() => scroll.current.scrollTo({ x: 0, y: posPara2 })}
          >
            Scroll To Para2
          </AppText>
          <AppText style={styles.paragraph} onLayout={handlePara1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus Ipsum.
          </AppText>
          <AppText
            style={{ fontSize: 25, fontWeight: "bold", color: "tomato" }}
            onPress={() => scroll.current.scrollTo({ x: 0, y: posButton })}
          >
            Scroll to button
          </AppText>
          <AppText style={styles.paragraph} onLayout={handlePara2}>
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

          <AppText style={styles.paragraph} onLayout={handlePara3}>
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
          <AppText
            style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}
            onPress={() => scroll.current.scrollTo({ x: 0, y: posPara1 })}
          >
            Scroll to para 1
          </AppText>
          <Seperator style={styles.seperator} />
          <View style={styles.buttonContainer} onLayout={handleButton}>
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
  heading: { fontSize: 25, fontWeight: "bold", textAlign: "center" },
  paragraph: { textAlign: "justify", fontSize: 20, marginVertical: 10 },
  seperator: { marginVertical: 10 },
});
export default DetailScreen;
