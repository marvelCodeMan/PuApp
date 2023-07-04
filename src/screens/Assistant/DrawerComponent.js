import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const DrawerComponent = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.listStyle}>
        <Tab title={"Edit Profile"} iconName={"edit"} />
        <Tab title={"Add Emoloyees"} iconName={"user-plus"} />
      </ScrollView>
      <Tab title={"Log Out"} iconName={"log-out"} />
    </View>
  );
};

const Tab = ({ title, iconName }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <View
        style={[
          styles.featureWrapper,
          { flexGrow: 1, paddingLeft: responsiveWidth(2) },
        ]}
      >
        <Feather name={iconName} size={responsiveWidth(6)} />
      </View>
      <View style={[styles.featureWrapper, { flex: 1, flexGrow: 5 }]}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
      <View style={[styles.featureWrapper, { flexGrow: 1 }]}>
        <Feather name="chevron-right" size={responsiveWidth(4)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // position: "absolute",
    // top: responsiveHeight(15),
  },
  listStyle: {
    // position: "absolute",
    // top: responsiveHeight(10),
    paddingTop: responsiveHeight(10),
    backgroundColor: "#fae8d7",
  },
  buttonStyle: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    borderBottomWidth: responsiveWidth(0.3),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
  },
  featureWrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "500",
    color: "#fa9387",
  },
  iconStyle: {
    // height: responsiveHeight(10),
    // width: responsiveWidth(14),
  },
});

export default DrawerComponent;
