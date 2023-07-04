import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Head from "./src/components/Head";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    // <Head />
  );
}
