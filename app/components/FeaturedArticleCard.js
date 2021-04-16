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
          <AppText style={styles.content} lines={6}>
            Content consequat in neque. Fusce posuere at urna vitae
            sollicitudin. Morbi pharetra massa sed dictum ornare. Maecenas sed
            nisi semper purus malesuada fringilla vel a nunc. Cras elementum
            nisi non libero porttitor efficitur. Donec ultrices turpis id nisi ,
            at enim
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
  },
  headingContainer: { marginBottom: 5 },
  heading: { fontSize: 35 },
  content: { fontSize: 20, textAlign: "justify" },

  contentContainer: { marginTop: 10 },
});

export default FeaturedArticleCard;
