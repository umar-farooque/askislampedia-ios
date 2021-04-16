import React from "react";
import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import ArticleStack from "./ArticleStack";
import EbookScreen from "../screens/EbookScreen";
import QuranScreen from "../screens/QuranScreen";
import InfoScreen from "../screens/InfoScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import CustomDrawerScreen from "../screens/CustomDrawerScreen";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return <TabNavigator />;
}

export default AppNavigator;

// <Drawer.Navigator
//   drawerContent={(props) => <CustomDrawerScreen {...props} />}
// >
//   <Drawer.Screen name="Articles" component={TabNavigator} />
// </Drawer.Navigator>
