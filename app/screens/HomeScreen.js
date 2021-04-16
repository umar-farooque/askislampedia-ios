import React, { useEffect, useState, useRef } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";

import AppText from "../components/AppText";
import FeaturedArticleCard from "../components/FeaturedArticleCard";
import ReadMoreIcon from "../components/ReadMoreIcon";
import Seperator from "../components/Seperator";
import TopReadCard from "../components/TopReadCard";
import ScrollToTop from "../components/ScrollToTop";

import articlesApi from "../api/articles";
import UseApi from "../hooks/useApi";

let data = [
  { title: "Read About Allah" },
  { title: "Read About Muhammad" },
  { title: "Pillars Of Islam " },
  { title: "Women's World" },
  { title: "Children's World" },
  { title: "Months Of Islam" },
];
let current = [
  { title: "Divorce or Talaq" },
  { title: "Khula" },
  { title: "Increasing Rape Cases - Few reasons & solutions" },
  { title: "Ideal Muslim Wife" },
  { title: "Seeking Knowledge To Paradise" },
];
let topArticles = [
  { title: "Abu Huraira" },
  { title: "Aisha" },
  { title: "Khalid Bin Waleed" },
  { title: "Fatima" },
  { title: "Umm Sulaym" },
  { title: "Saad Bin Abi Waqqas" },
  { title: "Talha" },
  { title: "Khulfa E Rashideen" },
  { title: "Radhiallahu Anhu" },
  { title: "Umm Al Momineen" },
];
let Allah = [
  { title: "Who is Allah ?" },
  { title: "The Mercy Of Allah" },
  { title: "Rights Of Allah" },
  { title: "Meaning Of La Ilaha Illallah" },
  { title: "Names and Attributes Of Allah" },
  { title: "Worshipping Allah out of Love Fear & Hope" },
];
let Muhammad = [
  { title: "Who is Muhammad sallalhu alayhi wa sallam?" },
  { title: "Prophet Muhammad as the Best Role Model" },
  { title: "What  Prophet Muhammad Gave To Humanity?" },
  { title: "The Last Sermon Of Prophet Muhammad" },
  { title: "The Importance Of Adhering To The Final Messenger" },
  { title: "What Eminent Non-Muslims Said About Muhammad" },
];
let Months = [
  { title: "Muharram" },
  { title: "Safar" },
  { title: "Rabi-ul-Awwal" },
  { title: "Rabi-ul-Akhir" },
  { title: "Jumada-al-Oola" },
  { title: "Jumada-al-Akhirah" },
  { title: "Rajab" },
  { title: "Shaban" },
  { title: "Ramadhan" },
];
let pillars = [
  { title: "Shahda" },
  { title: "Salah" },
  { title: "Saum" },
  { title: "Zakat" },
  { title: "Hajj" },
  { title: "Belief In Allah" },
  { title: "Belief In The  Angels" },
  { title: "Belief In The Revealed Books" },
  { title: "Belief In The Messengers" },
  { title: "Belief In The Day Of Resurrection" },
  { title: "Belief In Destiny" },
];
let Women = [
  { title: "Liberation Of Women Through Islam" },
  { title: "Women's Turning Towards Islam" },
  { title: "Pregnancy" },
  { title: "Hijab" },
  { title: "Recepies" },
];
let Children = [
  { title: "Children" },
  { title: "Aqeeqah" },
  { title: "Arabic Learnings" },
  { title: "Kids Courses" },
  { title: "Islamic Home Schooling" },
  { title: "Islamic Cartoons" },
  { title: "Naming Your Newborn" },
];

function HomeScreen({ navigation }) {
  // const getListingsApi = useApi(articlesApi.getListings, true);

  // useEffect(() => {
  //   getListingsApi.request();
  // }, []);

  let scroll = useRef();
  let [visible, setVisible] = useState(false);
  // let [data, setData] = useState([]);

  let handlePress = () =>
    navigation.navigate("Detail Screen", {
      title: "Featured Article",
    });
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
      {/* {getListingsApi.loading && (
        <ActivityIndicator
          animating={getListingsApi.loading}
          size="large"
          color="blue"
        />
      )}
      <LoadingIndicator visible={getListingsApi.loading} />
      {getListingsApi.error && !getListingsApi.loading && (
        <>
          <AppText>Couldn't load Listings</AppText>
          <AppButton title="Retry" onPress={() => getListingsApi.request()} />
        </>
      )} */}
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
            Read About Muhammad Sallalhu Alayhi Wasallam
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
    marginTop: 20,
    marginBottom: 10,
  },
  articlesContent: {
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 20,
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

export default HomeScreen;
{
  /* <View style={styles.articlesContainer}>
  <AppText style={styles.text}>Top read</AppText>
  <View style={styles.articlesContent}>
    <FlatList
      data={getListingsApi.data}
      keyExtractor={(item, index) => `${item}+${index}`}
      ListEmptyComponent={TopReadCard}
      ItemSeparatorComponent={Seperator}
      renderItem={(item) => (
        <TopReadCard
          title={item.item}
          onPress={() =>
            navigation.navigate("Detail Screen", { title: item.item })
          }
        />
      )}
    />
  </View>
</View> */
}

// ListFooterComponent={() => (
//   <AppText
//     style={{ marginVertical: 10, color: "blue" }}
//     onPress={() => console.log("Tapped")}
//   >
//     Read More
//   </AppText>
// )}
// ListFooterComponentStyle={{marginLeft:15}}

// let [articles, setArticles] = useState([]);
// let apiClient = create({
//   baseURL: "https://askislampedia.com/Quranic-portlet/rest/getTitles",
//   headers: {
//     Accept: "",
//     "X-API-KEY": "123",
//     "X-MARKS-THE-SPOT": "yarrrrr",
//   },
// });

// apiClient
//   .get("English_wiki")
//   .then((data) => setArticles(splitData(data.data)))
