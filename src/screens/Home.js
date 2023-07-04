import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import Head from "../components/Head";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Head />
      <Text style={styles.homeText} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeText: {
    alignSelf: "center",
    color: "green",
  },
});

export default Home;
