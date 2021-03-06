import React, { useState } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";

import Seperator from "../components/Seperator";
import TopReadCard from "../components/TopReadCard";

import { searchArticles } from "../utils/data";
import { sortData } from "../utils/sort";

import { SearchBar } from "react-native-elements";

function SearchScreen({ navigation }) {
  let [data, setData] = useState([]);
  let [query, setQuery] = useState("");

  let handleSearch = (str) => {
    setQuery(str);
    if (str === "") {
      setData([]);
      return;
    }
    let result = searchArticles(query);
    setData(sortData(result));
  };

  let handleCancel = () => setData([]);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search Articles..."
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
      {data.length !== 0 && data.length > 1 && (
        <View style={styles.scrollViewContainer} />
      )}
      {data.length !== 0 && (
        <ScrollView style={{ flex: 1, marginTop: 15 }}>
          <View style={styles.ebookContainer}>
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
              ItemSeparatorComponent={Seperator}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  scrollViewContainer: {
    position: "absolute",
    backgroundColor: "white",
    height: 200,
    width: "100%",
    top: "14%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  ebookContainer: {
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 20,
    marginBottom: 30,
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
export default SearchScreen;
