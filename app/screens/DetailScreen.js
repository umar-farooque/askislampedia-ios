import React, { useEffect, useState, useRef } from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";

import ScrollToTop from "../components/ScrollToTop";
import useApi from "../hooks/useApi";
import articles from "../api/articles";

import HTML from "react-native-render-html";
import table, { IGNORED_TAGS } from "@native-html/table-plugin";
import { WebView } from "react-native-webview";

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

function DetailScreen({ route, navigation }) {
  const contentWidth = useWindowDimensions().width;
  let url = route.params.url;
  url = url.split("/");
  url = url[url.length - 1];
  let newUrl = url.split("+").join("%20");
  console.log(newUrl);
  let getArticles = useApi(() => articles.getDetails(newUrl));

  useEffect(() => {
    getArticles.request();
  }, []);

  let handleLinkPress = (evt, href, htmlAttr) => {
    let url = href.split("/");
    url = url[url.length - 1];
    if (url.includes("#")) url = url.split("#")[0];
    let newUrl = url.split("+").join("%20");
    let title = decodeURI(url).split("+").join(" ");
    //console.log(url, title);

    let quran = "http://www.askislampedia.com/quran/-/view";
    if (href.includes("askislampedia") && !href.includes(quran)) {
      console.log("internal");
      navigation.navigate("Internal Links", {
        title,
        url: newUrl,
      });
    } else if (href.includes("http" || "https") & !href.includes(quran)) {
      navigation.navigate("Webview", { title: "title", url: href });
      console.log(href);
    } else {
      console.log(href);
    }
  };

  let scroll = useRef();

  let [visible, setVisible] = useState(false);

  let handleScollDrag = () => setVisible(true);
  let handleScrollToTop = () => {
    scroll.current.scrollTo({ x: 0, y: 0, animated: true });
    setVisible(false);
  };
  let handleMomentumScrollEnd = (event) => {
    if (!event.nativeEvent.contentOffset.y > 0) setVisible(false);
  };
  return (
    <>
      <ScrollView
        ref={scroll}
        style={styles.container}
        onScrollBeginDrag={handleScollDrag}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        {getArticles.loading && (
          <ActivityIndicator color="black" size="large" />
        )}
        <HTML
          {...htmlProps}
          source={{ html: getArticles.data }}
          contentWidth={contentWidth}
          tagsStyles={tagsStyles}
          onLinkPress={(evt, href, htmlAttr) =>
            handleLinkPress(evt, href, htmlAttr)
          }
          ignoredTags={[...IGNORED_TAGS, "img", "hr", "table"]}
          containerStyle={{ flex: 1, padding: 5, marginTop: 15 }}
          computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
        />
        {/* <View style={styles.card}>
          <View style={styles.headingContainer}>
            <AppText style={styles.heading}>{Title}</AppText>
          </View>
          <Seperator style={styles.seperator} />

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
          <Seperator style={styles.seperator} />
          <View style={styles.buttonContainer}>
            <AppButton
              title="Read More"
              onPress={() =>
                navigation.navigate("Webview", {
                  title: Title,
                  url:
                    // "https://www.askislampedia.com/en/wiki/-/wiki/English_wiki/Allah+%D8%B3%D8%A8%D8%AD%D8%A7%D9%86%D9%87+%D9%88+%D8%AA%D8%B9%D8%A7%D9%84%D9%89",
                    "https://www.askislampedia.com/en/wiki/-/wiki/English_wiki/Laa+ilaha+illallah",
                })
              }
            />
          </View>
        </View> */}
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

{
  /*  
  let [posPara1, setPosPara1] = useState("");
  let [posPara2, setPosPara2] = useState("");
  let [posButton, setPosButton] = useState("");
  let handlePara1 = (event) => {
    const { layout } = event.nativeEvent;
    setPosPara1(layout.y);
    console.log("height:", layout.height);
    console.log("width:", layout.width);
    console.log("x:", layout.x);
    console.log("y:", layout.y);
  };
  let handlePara2 = (event) => {
    const { layout } = event.nativeEvent;
    setPosPara2(layout.y);
  };
  
  let handleButton = (event) => {
    const { layout } = event.nativeEvent;
    setPosButton(layout.y);
  };
  { <AppText
    style={{ fontSize: 25, fontWeight: "bold", color: "tomato" }}
    onPress={() => scroll.current.scrollTo({ x: 0, y: posButton })}
    >
    Scroll to button
    </AppText> 
    
*/
}
{
  /* <View style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
      
    </View> */
}
{
  /* <HTML
      ,backgroundColor:"white"{...htmlProps}
      source={{ html: getDetails.data }}
      contentWidth={contentWidth}
      tagsStyles={tagsStyles}
      ignoredTags={[...IGNORED_TAGS, "img", "hr"]}
      containerStyle={{ flex: 1, padding: 5, marginTop: 15 }}
      computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
    /> */
}

{
  /* {getDetails.loading && (
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
        )} */
}
