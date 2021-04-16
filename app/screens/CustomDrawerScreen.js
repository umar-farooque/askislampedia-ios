import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
function CustomDrawerScreen(props) {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        {/* <View style={styles.content} /> */}

        <Image
          source={require("../assets/image.jpg")}
          style={{ width: "100%", height: 150 }}
        />
        <DrawerContentScrollView {...props}>
          {/* <DrawerItem
            label="Articles"
            labelStyle={styles.text}
            onPress={() => {
              props.navigation.navigate("Home Screen");
            }}
          /> */}
          {/* <DrawerItem
            label="E-Book"
            labelStyle={styles.text}
            onPress={() => props.navigation.navigate("E-books")}
          />
          <DrawerItem
            label="Quran"
            labelStyle={styles.text}
            onPress={() => props.navigation.navigate("Quran")}
          /> */}
          <DrawerItem
            labelStyle={styles.text}
            label="Scholars View"
            onPress={() => props.navigation.navigate("ScholarsView")}
          />
          <DrawerItem
            labelStyle={styles.text}
            label="Basic Islam Info"
            onPress={() => props.navigation.navigate("BasicIslam")}
          />
          <DrawerItem
            labelStyle={styles.text}
            label="Answering Allegations"
            onPress={() => props.navigation.navigate("AnsweringAllegations")}
          />
          <DrawerItem
            labelStyle={styles.text}
            label="About us"
            onPress={() => props.navigation.navigate("Info")}
          />
          <DrawerItem
            labelStyle={styles.text}
            label="Contact us"
            onPress={() => props.navigation.navigate("ContactUs")}
          />
        </DrawerContentScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, top: Constants.statusBarHeight },
  content: {
    height: "18%",
    width: "100%",
    backgroundColor: "black",
  },
  text: { fontSize: 20 },
});

export default CustomDrawerScreen;
