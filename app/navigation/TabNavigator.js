import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import ArticleStack from "./ArticleStack";
import EbookScreen from "../screens/EbookScreen";
import QuranScreen from "../screens/QuranScreen";
import InfoScreen from "../screens/InfoScreen";

const Tab = createBottomTabNavigator();
function TabNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Articles"
        component={ArticleStack}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="newspaper-o"
              type="font-awesome"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="E-books"
        component={EbookScreen}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="bookshelf"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Quran"
        component={QuranScreen}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="ios-book-outline"
              type="ionicon"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={({ navigation, route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="info" type="feather" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
