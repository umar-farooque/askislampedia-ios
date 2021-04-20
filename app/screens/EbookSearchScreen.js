import React, { useState } from "react";
import { ScrollView, StyleSheet, FlatList, View } from "react-native";

import Seperator from "../components/Seperator";
import TopReadCard from "../components/TopReadCard";

import { searchEbooks } from "../utils/data";
import { sortData } from "../utils/sort";

import { SearchBar } from "react-native-elements";
import colors from "../utils/colors";

function EbookSearchScreen({ navigation }) {
  let [data, setData] = useState([]);
  let [query, setQuery] = useState("");
  //   console.log("************************", data.length);
  let handleSearch = (str) => {
    // console.log("********************", str);
    setQuery(str);
    if (str === "") {
      setData([]);
      return;
    }
    let result = searchEbooks(query);
    setData(sortData(result));
  };

  let handleCancel = () => setData([]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search Ebook..."
          containerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
          autoFocus
          showCancel
          onChangeText={handleSearch}
          onCancel={handleCancel}
          value={query}
        />
      </View>
      {data.length > 1 && data.length !== 0 && (
        <View style={styles.scrollViewContainer} />
      )}
      {data.length !== 0 && (
        <ScrollView
          style={{ flex: 1, marginTop: 15 }}
          showsVerticalScrollIndicator={false}
        >
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
              ItemSeparatorComponent={Seperator}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundColor,
  },
  scrollViewContainer: {
    position: "absolute",
    backgroundColor: "white",
    height: 100,
    width: "100%",
    top: "14%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: "center",
  },
  ebookContainer: {
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  listFooterComponentStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    justifyContent: "center",
    marginVertical: 15,
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
export default EbookSearchScreen;
