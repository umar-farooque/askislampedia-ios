import React from "react";

import InfoScreen from "../screens/InfoScreen";
import Hamburger from "../components/Hamburger";

import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const InfoStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Info Screen"
        component={InfoScreen}
        options={{
          title: "Info",
        }}
      />
    </Stack.Navigator>
  );
};

export default InfoStack;
