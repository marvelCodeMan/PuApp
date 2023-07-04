import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Head from "../components/Head";

const Pending = () => {
  <SafeAreaView style={styles.container}>
    <Head />
    <Text style={styles.pendingText}>Pending Tasks</Text>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pendingText: {
    alignSelf: "center",
  },
});

export default Pending;
