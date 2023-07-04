import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "3", title: "Item 3" },
  { id: "3", title: "Item 3" },
  { id: "3", title: "Item 3" },
  // Add more items as needed
];
const MyComponent = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal // Set the horizontal prop to make it horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginHorizontal: 10,
  },
});

export default MyComponent;
