import React from "react";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import BasicIslamInfo from "../screens/BasicIslamInfo";
import AnsweringAlegations from "../screens/AnweringAlegations";
import ScholarsView from "../screens/ScholarsView";
import ContactUs from "../screens/ContactUs";
import AboutUs from "../screens/AboutUs";

import Hamburger from "../components/Hamburger";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

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
          headerLeft: () => (
            <Hamburger onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
      <Stack.Screen
        name="Detail Screen"
        component={DetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
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
        name="ContactUs"
        component={ContactUs}
        options={{ title: "Contact Us" }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ title: "Contact Us" }}
      />
    </Stack.Navigator>
  );
}

export default ArticleStack;
