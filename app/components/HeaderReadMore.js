import React from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import colors from "../utils/colors";
import AppText from "./AppText";

function HeaderReadMore({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppText style={{ color: colors.readMore, padding: 0, margin: 0 }}>
          Read More
        </AppText>
        <Icon
          name="chevron-right"
          type="feather"
          color={colors.readMore}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
}

export default HeaderReadMore;
