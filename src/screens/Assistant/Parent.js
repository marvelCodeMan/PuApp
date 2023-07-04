import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import ComplaintAssign from "../../components/ComplaintAssign/ComplaintAssign";

const Stack = createStackNavigator();

const Parent = () => {
  // const [complaintsList, setComplaintsList] = useState([]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        // initialParams={{ complaintsList, setComplaintsList }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Complaint Assign"
        component={ComplaintAssign}
        // initialParams={{ complaintsList }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Parent;
