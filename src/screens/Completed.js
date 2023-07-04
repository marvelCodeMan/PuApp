import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Head from "../components/Head";

const Completed = () => {
  <SafeAreaView style={styles.container}>
    <Head />
    <Text style={styles.completedText}>Completed Tasks</Text>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  completedText: {
    alignSelf: "center",
  },
});

export default Completed;
