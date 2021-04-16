import React, { useRef, useState } from "react";
import { FlatList, ScrollView, View, StyleSheet } from "react-native";

import { SearchBar } from "react-native-elements";

import Seperator from "../components/Seperator";
import TopReadCard from "../components/TopReadCard";
import ScrollToTop from "../components/ScrollToTop";

let articles = [
  { title: "Divorce or Talaq" },
  { title: "Khula" },
  { title: "Increasing Rape Cases - Few reasons & solutions" },
  { title: "Ideal Muslim Wife" },
  { title: "Seeking Knowledge To Paradise" },
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
  { title: "Who is Allah ?" },
  { title: "The Mercy Of Allah" },
  { title: "Rights Of Allah" },
  { title: "Meaning Of La Ilaha Illallah" },
  { title: "Names and Attributes Of Allah" },
  { title: "Worshipping Allah out of Love Fear & Hope" },
  { title: "Who is Muhammad sallalhu alayhi wa sallam?" },
  { title: "Prophet Muhammad as the Best Role Model" },
  { title: "What  Prophet Muhammad Gave To Humanity?" },
  { title: "The Last Sermon Of Prophet Muhammad" },
  { title: "The Importance Of Adhering To The Final Messenger" },
  { title: "What Eminent Non-Muslims Said About Muhammad" },
  { title: "Muharram" },
  { title: "Safar" },
  { title: "Rabi-ul-Awwal" },
  { title: "Rabi-ul-Akhir" },
  { title: "Jumada-al-Oola" },
  { title: "Jumada-al-Akhirah" },
  { title: "Rajab" },
  { title: "Shaban" },
  { title: "Ramadhan" },
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
  { title: "Liberation Of Women Through Islam" },
  { title: "Women's Turning Towards Islam" },
  { title: "Pregnancy" },
  { title: "Hijab" },
  { title: "Recepies" },
  { title: "Children" },
  { title: "Aqeeqah" },
  { title: "Arabic Learnings" },
  { title: "Kids Courses" },
  { title: "Islamic Home Schooling" },
  { title: "Islamic Cartoons" },
  { title: "Naming Your Newborn" },
];

function AllArticles({ navigation }) {
  let scroll = useRef();
  let [visible, setVisible] = useState(false);
  let [data,setData] = useState([articles.slice(0,15)])
  let [page,setPage] = useState(1)

{/* 

addRecords = (page) => {
  // assuming this.state.dataPosts hold all the records
  const newRecords = []
  for(var i = page * 12, il = i + 12; i < il && i < 
    articles.length; i++){
    newRecords.push(articles[i]);
  }
  this.setState({
    posts: [...this.state.posts, ...newRecords]
  });
  setData([...data,...newRecords])
}

onScrollHandler = () => {
  this.setState({
    page: this.state.page + 1
  }, () => {
    addRecords(page);
  });
  setPage(page + 1)
  addRecords(page)
}



*/}
  let loadMore = ()=>{
    if (articles.length <= data.length) return data
    let ITEMS_PER_PAGE = 15
    const start = page*ITEMS_PER_PAGE;
    const end = (page+1)*ITEMS_PER_PAGE-1;

    const newData = articles.slice(start, end); // here, we will receive next batch of the items
    // this.setState({data: [...data, ...newData]})
    setData([...data,...newData])
    setPage(page + 1)
  }

  let handleScollDrag = () => setVisible(true);
  let handleScrollToTop = () => {
    scroll.current.scrollTo({ animated: true }, 0);
    setVisible(false);
  };
  let handleMomentumScrollEnd = (event) => {
    if (!event.nativeEvent.contentOffset.y > 0) setVisible(false);
  };

  return (
    <>
      <ScrollView
        style={{ flex: 1, padding: 15, backgroundColor: "#F1F1F1" }}
        ref={scroll}
        onScrollBeginDrag={handleScollDrag}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search articles..."
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
            // onFocus={() => navigation.navigate("Home Screen")}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            overflow: "hidden",
            borderRadius: 20,
            marginBottom: 30,
          }}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item.title}
            onEndReached={loadMore}
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
            ItemSeparatorComponent={Seperator}
          />
        </View>
      </ScrollView>
      {visible && <ScrollToTop onPress={handleScrollToTop} />}
    </>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    marginBottom: 10,
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
    borderRadius: 10,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
});

export default AllArticles;
