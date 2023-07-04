import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Completed from "../screens/Completed";
import Pending from "../screens/Pending";
import NewAssigned from "../screens/NewAssigned";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "maroon",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "white",
        },
        headerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Completed"}
        component={Completed}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"check"}
              size={25}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Pending"}
        component={Pending}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"activity"}
              size={25}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Newly Assigned"}
        component={NewAssigned}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"arrow-up"}
              size={25}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
