import React from "react";
import { ScrollView, View, StyleSheet, FlatList } from "react-native";
import AppText from "../components/AppText";
import TopReadCard from "../components/TopReadCard";
import Seperator from "../components/Seperator";
let articles = [
  { title: "Prophet Shuaib" },
  { title: "Zabur" },
  { title: "Despair" },
  { title: "Prophet Ishaq" },
  { title: "Torah" },
  { title: "Injeel" },
  { title: "Shaban" },
  { title: "Deen" },
  { title: "Moderation" },
  { title: "Pregnancy" },
  { title: "Envy (Hasad)" },
  { title: "Infertility" },
  { title: "Exaggeration" },
  { title: "Tahneek" },
  { title: "Ruqyah" },
  { title: "Mudabbiraat" },
  { title: "Malak Al Jibaal" },
  { title: "Prophet Ayyub," },
  { title: "Prophet Uzair" },
  { title: "Prophet Yunus" },
  { title: "Prophet Salih" },
  { title: "Prophet Enoch" },
  { title: "Prophet Hud" },
  { title: "Malak ul Maut" },
  { title: "Maalik" },
  { title: "Wealth" },
  { title: "Intestine" },
  { title: "Forelock" },
  { title: "Islam- A Complete Way Of Life!" },
  { title: "Jesus,Alayhi Salam" },
  { title: "Scientific Miracles in the Qur'an" },
  { title: "Miracles of the Qur'an" },
  { title: "Keys of Provision (Rizq)" },
  { title: "Treating others in Islam,Ridhwan" },
  { title: "Belief in the Last Day" },
  { title: "Kiraman and Katibin" },
  { title: "Israfil or Israfeel" },
  { title: "Basic Source of Islam" },
  { title: "Harut and Marut" },
];

function ArticlesScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <AppText style={styles.text}>Articles </AppText>
      <View style={styles.content}>
        <FlatList
          data={articles}
          keyExtractor={(item) => item.title}
          renderItem={(item) => <TopReadCard title={item.item.title} />}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#F1F1F1",
  },
  content: {
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 20,
  },
  text: { fontSize: 24 },
});

export default ArticlesScreen;
