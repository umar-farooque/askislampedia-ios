import React from "react";
import { TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function Hamburger({ onPress }) {
  return (
    <TouchableOpacity style={{ paddingLeft: 15 }} onPress={onPress}>
      <MaterialCommunityIcons name="menu" color="black" size={35} />
    </TouchableOpacity>
  );
}

export default Hamburger;
