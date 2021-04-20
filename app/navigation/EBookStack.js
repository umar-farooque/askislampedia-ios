import React from "react";

import EbookScreen from "../screens/EbookScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import WebViewScreen from "../screens/WebViewScreen";
import EbookSearchScreen from "../screens/EbookSearchScreen";

const Stack = createStackNavigator();

const EbookStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EBook Screen"
        component={EbookScreen}
        options={{
          title: "E-Books",
        }}
      />
      <Stack.Screen
        name="Webview"
        component={WebViewScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Ebook Search Screen"
        component={EbookSearchScreen}
        options={{ title: "Search E-books" }}
      />
    </Stack.Navigator>
  );
};

export default EbookStack;
