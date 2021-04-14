import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";

function FeaturedArticleCard({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <View style={styles.headingContainer}>
          <AppText style={styles.heading} lines={1}>
            Lorem Ipsum
          </AppText>
        </View>
        <View style={styles.contentContainer}>
          <AppText style={styles.content} lines={9}>
            Content consequat in neque. Fusce posuere at urna vitae
            sollicitudin. Morbi pharetra massa sed dictum ornare. Maecenas sed
            nisi semper purus malesuada fringilla vel a nunc. Cras elementum
            nisi non libero porttitor efficitur. Donec ultrices turpis id nisi ,
            at enim. Etiam efficitur nunc et porta nec id leo.uis lacus neque,
            vulputate eu nunc eget, luctus fringilla dui. Etiam lacinia quam in
            ultrices suscipit. Etiam eget ex porta, laoreet justo at, dictum
            arcu. Etiam ultrices rutrum lorem. Praesent ut mauris vitae diam
            malesuada ornare quis ut purus. Proin venenatis purus eu faucibus
            iaculis. Cras ac efficitur nisi. Phasellus pretium tempus hendrerit.
            Duis scelerisque nunc ut finibus dignissim. Pellentesque vehicula
            tempus nunc fringilla molestie. Nam sed quam nec ante pellentesque
            accumsan in in neque. Nulla nec consectetur turpis, eu dictum
            libero. Maecenas pretium, turpis sed dictum rutrum, sem velit
            commodo risus, a varius urna ligula non mauris. Praesent quis urna a
            mauris dapibus volutpat quis cursus dui.
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
  },
  headingContainer: { marginBottom: 5 },
  heading: { fontSize: 35 },
  content: { fontSize: 20 },

  contentContainer: { marginTop: 10 },
});

export default FeaturedArticleCard;
