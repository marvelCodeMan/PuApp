import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Head = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Panjab_University_logo.png")}
        style={styles.logo}
      />
      <Text style={styles.headText}>Project1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "maroon",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  headText: {
    color: "black",
    paddingTop: 40,
    fontWeight: "bold",
    fontSize: 30,
  },
  logo: {
    borderRadius: 2,
    marginTop: 20,
    height: 100,
    width: 100,
  },
});

export default Head;
