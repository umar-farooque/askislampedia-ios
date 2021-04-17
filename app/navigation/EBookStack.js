import React from "react";

import EbookScreen from "../screens/EbookScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import WebViewScreen from "../screens/WebViewScreen";

const Stack = createStackNavigator();

const EbookStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EBook Screen"
        component={EbookScreen}
        options={{
          title: "E-Book",
        }}
      />
      <Stack.Screen
        name="Webview"
        component={WebViewScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default EbookStack;
