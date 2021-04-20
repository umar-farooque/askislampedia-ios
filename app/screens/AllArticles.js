import React, { useRef, useState } from "react";
import { FlatList, ScrollView, View, StyleSheet } from "react-native";

import { SearchBar } from "react-native-elements";

import Seperator from "../components/Seperator";
import TopReadCard from "../components/TopReadCard";
import ScrollToTop from "../components/ScrollToTop";
import AppButton from "../components/AppButton";
import { AllArticles as article } from "../utils/data";

import { sortData } from "../utils/sort";

import colors from "../utils/colors";

function AllArticles({ navigation }) {
  let scroll = useRef();
  let sortedData = sortData(article);
  let [visible, setVisible] = useState(false);
  let [data, setData] = useState(sortData([...sortedData.slice(0, 30)]));
  let [buttonVisible, setButtonVisible] = useState(true);
  let [page, setPage] = useState(1);

  let loadMore = () => {
    let ITEMS_PER_PAGE = 30;

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
  let handleScollDrag = () => setVisible(true);

  let handleScrollToTop = () => {
    scroll.current.scrollTo({ animated: true }, 0);
    setVisible(false);
  };

  let handleMomentumScrollEnd = (event) => {
    if (!event.nativeEvent.contentOffset.y > 0) setVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search articles..."
          containerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
          onFocus={() => navigation.navigate("Search Screen")}
        />
      </View>
      <View style={styles.scrollViewContainer} />
      <ScrollView
        style={{ flex: 1, marginTop: 15 }}
        ref={scroll}
        onScrollBeginDrag={handleScollDrag}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.articlesContent}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.title}
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
      {visible && <ScrollToTop onPress={handleScrollToTop} />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollViewContainer: {
    position: "absolute",
    backgroundColor: "white",
    height: 50,
    width: "100%",
    top: "14%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: "center",
  },
  articlesContent: {
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  searchContainer: {
    justifyContent: "center",
    marginVertical: 15,
    alignItems: "center",
  },
  listFooterComponentStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainerStyle: {
    borderRadius: 25,
    backgroundColor: "white",
  },
  inputStyle: { backgroundColor: "white" },
  containerStyle: {
    padding: 0,
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default AllArticles;
