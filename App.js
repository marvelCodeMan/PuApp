import { React, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import Login from "./src/screens/Login";
import MyComponent from "./src/components/MyComponent";
import CreateAccount from "./src/components/CreateAccount";
import DropDownSelector from "./src/components/DropDownSelector";
import ComplaintAssign from "./src/components/ComplaintAssign/ComplaintAssign";
import Home from "./src/screens/Assistant/Home";
import AssistantScreen from "./src/screens/Assistant/AssistantScreen";
import Filter from "./src/screens/Assistant/Filter";
("./src/screens/Assistant/AssistantScreen");

export default function App() {
  // const [loggedin, setLoggedIn] = useState(false);
  // if (loggedin) {
  //   return <NavigatorComponent />;
  // }
  // return <Login setLoggedIn={setLoggedIn} />;
  // return <ComplaintAssign complaintIds={["#123", "#345"]} />;
  // return <Home />;
  // return <AssistantScreen />;
  // return <Filter />;
  return <CreateAccount />;
  // return <DropDownSelector />;
}

const NavigatorComponent = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
