import React from "react";

import QuranScreen from "../screens/QuranScreen";
import Hamburger from "../components/Hamburger";

import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const QuranStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Quran Screen"
        component={QuranScreen}
        options={{
          title: "Quran",
        }}
      />
    </Stack.Navigator>
  );
};

export default QuranStack;
