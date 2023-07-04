import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Parent from "./Parent";
import DrawerComponent from "./DrawerComponent";

const Drawer = createDrawerNavigator();

const AssistantScreen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerComponent}>
        <Drawer.Screen
          name="Parent"
          options={{ headerShown: false }}
          component={Parent}
        ></Drawer.Screen>
        {/* <Drawer.Screen name="" options={{ header: false }}></Drawer.Screen> */}
      </Drawer.Navigator>
    </NavigationContainer>
    // <View></View>
  );
};

export default AssistantScreen;
