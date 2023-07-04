import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Head from "../components/Head";

const NewAssigned = () => {
  <SafeAreaView style={styles.container}>
    <Head />
    <Text style={styles.newAssignedText}>New Assigned Tasks</Text>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newAssignedText: {
    alignSelf: "center",
  },
});

export default NewAssigned;
