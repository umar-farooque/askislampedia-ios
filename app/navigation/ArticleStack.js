import React from "react";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import BasicIslamInfo from "../screens/BasicIslamInfo";
import AnsweringAlegations from "../screens/AnweringAlegations";
import ScholarsView from "../screens/ScholarsView";
import ContactUs from "../screens/ContactUs";
import AboutUs from "../screens/AboutUs";
// import EbookScreen from "../screens/EbookScreen";
// import InfoScreen from "../screens/InfoScreen";
// import QuranScreen from "../screens/QuranScreen";

import Hamburger from "../components/Hamburger";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import WebViewScreen from "../screens/WebViewScreen";
import AllArticles from "../screens/AllArticles";
import SearchScreen from "../screens/SearchScreen";
import InternalLinksScreen from "../screens/InternalLinksScreen";
import NextScreen from "../screens/NextScreen";
import HeaderReadMore from "../components/HeaderReadMore";

const Stack = createStackNavigator();
const url = "https://www.askislampedia.com/wiki";
function ArticleStack(props) {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          title: "AskIslamPedia",
        }}
      />

      <Stack.Screen
        name="Detail Screen"
        component={DetailScreen}
        options={({ route, navigation }) => ({
          title: route.params.title,
          headerRight: () => (
            <HeaderReadMore
              onPress={() => navigation.navigate("Webview", { url })}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AllArticles"
        component={AllArticles}
        options={{ title: "Articles" }}
      />
      <Stack.Screen
        name="Search Screen"
        component={SearchScreen}
        options={{ title: "Search Articles" }}
      />
      <Stack.Screen
        name="Webview"
        component={WebViewScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Internal Links"
        component={InternalLinksScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="Next"
        component={NextScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

export default ArticleStack;

{
  /* <Stack.Screen
  name="BasicIslam"
  component={BasicIslamInfo}
  options={{ title: "Basic Islam Info" }}
/>
<Stack.Screen
  name="AnsweringAllegations"
  component={AnsweringAlegations}
  options={{ title: "Answering Allegations" }}
/>
<Stack.Screen
  name="ScholarsView"
  component={ScholarsView}
  options={{ title: "Scholars View" }}
/> 
<Stack.Screen
        name="EBook Screen"
        component={EbookScreen}
        options={{
          title: "E-Book",
          headerLeft: () => (
            <Hamburger onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
      <Stack.Screen
        name="Info Screen"
        component={InfoScreen}
        options={{
          title: "Info",
          headerLeft: () => (
            <Hamburger onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
      <Stack.Screen
        name="Quran Screen"
        component={QuranScreen}
        options={{
          title: "Quran",
          headerLeft: () => (
            <Hamburger onPress={() => navigation.openDrawer()} />
          ),
        }}
      />


*/
}
