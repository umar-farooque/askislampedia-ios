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

const Stack = createStackNavigator();

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
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="AllArticles"
        component={AllArticles}
        options={{ title: "Articles" }}
      />
      <Stack.Screen
        name="Webview"
        component={WebViewScreen}
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
