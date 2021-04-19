import React, { useEffect, useState, useRef } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import {
  Allah,
  Muhammad,
  current,
  Women,
  Children,
  topArticles,
  pillars,
  Months,
} from "../utils/data";

import AppText from "../components/AppText";
import FeaturedArticleCard from "../components/FeaturedArticleCard";
import ReadMoreIcon from "../components/ReadMoreIcon";
import Seperator from "../components/Seperator";
import TopReadCard from "../components/TopReadCard";
import ScrollToTop from "../components/ScrollToTop";

function HomeScreen({ navigation }) {
  let scroll = useRef();
  let [visible, setVisible] = useState(false);

  let handlePress = () => console.log("Press");
  // navigation.navigate("Detail Screen", {
  //   title: "Featured Article",
  // });
  let handleScollDrag = () => setVisible(true);
  let handleScrollToTop = () => {
    scroll.current.scrollTo({ animated: true }, 0);
    setVisible(false);
  };
  let handleMomentumScrollEnd = (event) => {
    if (!event.nativeEvent.contentOffset.y > 0) setVisible(false);
  };
  let handleReadMore = () => navigation.navigate("AllArticles");
  return (
    <>
      <ScrollView
        ref={scroll}
        style={styles.container}
        onScrollBeginDrag={handleScollDrag}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        <View style={styles.featuredContainer}>
          <AppText style={styles.text}>Featured article</AppText>
          <FeaturedArticleCard onPress={handlePress} />
          <ReadMoreIcon onPress={handlePress} />
        </View>
        {/* Articles About Allah */}
        <View style={styles.articlesContainer}>
          <AppText style={styles.text}>Read About Allah</AppText>
          <View style={styles.articlesContent}>
            <FlatList
              data={Allah}
              keyExtractor={(item) => item.title}
              ItemSeparatorComponent={Seperator}
              renderItem={(item) => (
                <TopReadCard
                  title={item.item.title}
                  onPress={() =>
                    navigation.navigate("Detail Screen", {
                      title: item.item.title,
                      url: item.item.main_url,
                    })
                  }
                />
              )}
            />
          </View>
          <ReadMoreIcon onPress={handleReadMore} />
        </View>
        {/* Articles About Prophet */}
        <View style={styles.articlesContainer}>
          <AppText style={styles.text}>
            Read About Muhammad Peace Be Upon Him
          </AppText>
          <View style={styles.articlesContent}>
            <FlatList
              data={Muhammad}
              keyExtractor={(item) => item.title}
              ItemSeparatorComponent={Seperator}
              renderItem={(item) => (
                <TopReadCard
                  title={item.item.title}
                  onPress={() =>
                    navigation.navigate("Detail Screen", {
                      title: item.item.title,
                      url: item.item.main_url,
                    })
                  }
                />
              )}
            />
          </View>
          <ReadMoreIcon onPress={handleReadMore} />
        </View>
        {/* Articles About Pillars Of Islam */}
        <View style={styles.articlesContainer}>
          <AppText style={styles.text}>Pillars Of Islam & Imaan</AppText>
          <View style={styles.articlesContent}>
            <FlatList
              data={pillars}
              keyExtractor={(item) => item.title}
              ItemSeparatorComponent={Seperator}
              renderItem={(item) => (
                <TopReadCard
                  title={item.item.title}
                  onPress={() =>
                    navigation.navigate("Detail Screen", {
                      title: item.item.title,
                      url: item.item.main_url,
                    })
                  }
                />
              )}
            />
          </View>
          <ReadMoreIcon onPress={handleReadMore} />
        </View>
        {/* Articles About Current Issues */}
        <View style={styles.articlesContainer}>
          <AppText style={styles.text}>Current Issues</AppText>
          <View style={styles.articlesContent}>
            <FlatList
              data={current}
              keyExtractor={(item) => item.title}
              ItemSeparatorComponent={Seperator}
              renderItem={(item) => (
                <TopReadCard
                  title={item.item.title}
                  onPress={() =>
                    navigation.navigate("Detail Screen", {
                      title: item.item.title,
                      url: item.item.main_url,
                    })
                  }
                />
              )}
            />
          </View>
          <ReadMoreIcon onPress={handleReadMore} />
        </View>
        {/* Articles About top articles */}
        <View style={styles.articlesContainer}>
          <AppText style={styles.text}>Top articles</AppText>
          <View style={styles.articlesContent}>
            <FlatList
              data={topArticles}
              keyExtractor={(item) => item.title}
              ItemSeparatorComponent={Seperator}
              renderItem={(item) => (
                <TopReadCard
                  title={item.item.title}
                  onPress={() =>
                    navigation.navigate("Detail Screen", {
                      title: item.item.title,
                      url: item.item.main_url,
                    })
                  }
                />
              )}
            />
          </View>

          <ReadMoreIcon onPress={handleReadMore} />
        </View>
        {/* Articles About Months Of Islam */}
        <View style={styles.articlesContainer}>
          <AppText style={styles.text}>Months Of Islam</AppText>
          <View style={styles.articlesContent}>
            <FlatList
              data={Months}
              keyExtractor={(item) => item.title}
              ItemSeparatorComponent={Seperator}
              renderItem={(item) => (
                <TopReadCard
                  title={item.item.title}
                  onPress={() =>
                    navigation.navigate("Detail Screen", {
                      title: item.item.title,
                      url: item.item.main_url,
                    })
                  }
                />
              )}
            />
          </View>
          <ReadMoreIcon onPress={handleReadMore} />
        </View>
        {/* Articles About Women's */}
        <View style={styles.articlesContainer}>
          <AppText style={styles.text}>Women's World</AppText>
          <View style={styles.articlesContent}>
            <FlatList
              data={Women}
              keyExtractor={(item) => item.title}
              ItemSeparatorComponent={Seperator}
              renderItem={(item) => (
                <TopReadCard
                  title={item.item.title}
                  onPress={() =>
                    navigation.navigate("Detail Screen", {
                      title: item.item.title,
                      url: item.item.main_url,
                    })
                  }
                />
              )}
            />
          </View>
          <ReadMoreIcon onPress={() => navigation.navigate("Articles")} />
        </View>
        {/* Articles About Children's */}
        <View style={styles.articlesContainer}>
          <AppText style={styles.text}>Children's World</AppText>
          <View style={styles.articlesContent}>
            <FlatList
              data={Children}
              keyExtractor={(item) => item.title}
              ItemSeparatorComponent={Seperator}
              renderItem={(item) => (
                <TopReadCard
                  title={item.item.title}
                  onPress={() =>
                    navigation.navigate("Detail Screen", {
                      title: item.item.title,
                      url: item.item.main_url,
                    })
                  }
                />
              )}
            />
          </View>
          <ReadMoreIcon onPress={handleReadMore} />
        </View>
      </ScrollView>
      {visible && <ScrollToTop onPress={handleScrollToTop} />}
    </>
  );
}

const styles = StyleSheet.create({
  articlesContainer: {
    // marginTop: 20,
    // marginBottom: 10,
    marginVertical: 10,
  },
  articlesContent: {
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  container: {
    paddingHorizontal: 15,
    backgroundColor: "#F1F1F1",
  },
  featuredContainer: {
    marginTop: 20,
  },
  text: { fontSize: 24, marginBottom: 15 },
});
// console.log();
export default HomeScreen;
