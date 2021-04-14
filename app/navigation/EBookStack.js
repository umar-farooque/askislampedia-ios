import React from "react";

import EbookScreen from "../screens/EbookScreen";
import Hamburger from "../components/Hamburger";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

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
          headerLeft: () => (
            <Hamburger onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default EbookStack;
