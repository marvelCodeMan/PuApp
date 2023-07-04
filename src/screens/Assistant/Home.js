// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../../assets/css";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import DropDownSelector from "./DropDownSelector";

import tasksData from "./tasksData";
import employees from "./employees";
import ComplaintAssign from "../../components/ComplaintAssign/ComplaintAssign";

import { createStackNavigator } from "@react-navigation/stack";
import { useFocusEffect } from "@react-navigation/native";
import Filter from "./Filter";

const Home = ({ navigation }) => {
  // const { complaintsList, setComplaintsList } = props.params;
  const [complaintsList, setComplaintsList] = useState([]);
  const dept = "Water Department";
  const [isAssigning, setIsAssigning] = useState(false);
  const [tasks, setTasks] = useState(tasksData);
  const [filter, setFilter] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setComplaintsList([]);
      };
    }, [])
  );

  // console.log(isAssigning);

  return (
    <SafeAreaView style={styles.container}>
      {filter && <Filter setFilter={setFilter} />}
      <Header dept={dept} navigation={navigation} />
      <Body
        setIsAssigning={setIsAssigning}
        navigation={navigation}
        complaintsList={complaintsList}
        setComplaintsList={setComplaintsList}
        tasks={tasks}
        setFilter={setFilter}
      />
    </SafeAreaView>
  );
};

const Header = ({ dept = "Water Department", navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headingContainer}>
        <View style={styles.drawerButton}>
          <TouchableOpacity
            style={{ paddingLeft: responsiveWidth(2) }}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Feather
              name="align-justify"
              color={"white"}
              size={responsiveWidth(6)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>PANJAB UNIVERSITY</Text>
        </View>
      </View>
      <View>
        <Text style={styles.deptName}>{dept}</Text>
      </View>
      <View style={[styles.profileImageContainer]}>
        <TouchableOpacity style={styles.profileImageButton}>
          <Image
            source={require("../../../assets/SauravTiwari.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const data = [
  {
    name: "Completed",
    value: 10,
  },
  { name: "Pending", value: 10 },
  { name: "Ongoing", value: 10 },
];

// let st = {};

const Body = ({
  name = "Saurav Tiwari",
  role = "Assistant",
  complaintsList,
  setComplaintsList,
  setIsAssigning,
  navigation,
  tasks,
  setFilter,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedRole, setSelectedRole] = useState(["Pending", 10]);
  const [empSelected, setEmpSelected] = useState(false);

  useEffect(() => {
    setEmpSelected(false);
    // console.log(empSelected);
  }, [isClicked]);
  // console.log(selectedRole);
  // console.log(tasks[selectedRole[0].toLowerCase()]);
  const Stack = createStackNavigator();
  return (
    <View style={bodyStyles.container}>
      <View style={bodyStyles.headingContainer}>
        <Text style={bodyStyles.headingText}> {name} </Text>
        <Text style={bodyStyles.roleText}> {role} </Text>
      </View>
      <View style={bodyStyles.summaryContainer}>
        <View style={bodyStyles.summaryBox}>
          <Text style={bodyStyles.summaryValue}>10</Text>
          <Text style={bodyStyles.summaryHeading}>Completed</Text>
        </View>
        <View
          style={[
            bodyStyles.summaryBox,
            {
              borderLeftWidth: responsiveWidth(0.3),
              borderRightWidth: responsiveWidth(0.3),
            },
          ]}
        >
          <Text style={bodyStyles.summaryValue}>10</Text>
          <Text style={bodyStyles.summaryHeading}>Pending</Text>
        </View>
        <View style={bodyStyles.summaryBox}>
          <Text style={bodyStyles.summaryValue}>10</Text>
          <Text style={bodyStyles.summaryHeading}>Ongoing</Text>
        </View>
      </View>
      <View style={bodyStyles.tabContainer}>
        <View style={{ flexDirection: "row" }}>
          <DropDownSelector
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            Data={data}
            st={
              empSelected
                ? { backgroundColor: "white" }
                : { backgroundColor: colors.color }
            }
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: responsiveWidth(1.5),
              paddingRight: responsiveWidth(1.5),
              marginLeft: responsiveWidth(-4),
              marginRight: responsiveWidth(4),
              borderRadius: responsiveWidth(2),
              borderWidth: responsiveWidth(0.3),
            }}
            onPress={() => {
              setFilter(true);
            }}
          >
            <Feather
              name="filter"
              color={colors.color}
              size={responsiveWidth(5)}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={
            empSelected
              ? [
                  bodyStyles.tab,
                  bodyStyles.empButton,
                  { backgroundColor: colors.color },
                ]
              : [
                  bodyStyles.tab,
                  bodyStyles.empButton,
                  { backgroundColor: "white" },
                ]
          }
          onPress={() => {
            setIsClicked(false);
            setEmpSelected(!empSelected);
          }}
        >
          <Text style={{ fontWeight: "500" }}>Employees</Text>
        </TouchableOpacity>
      </View>

      {!empSelected ? (
        <Tasks
          selectedRole={selectedRole}
          setIsAssigning={setIsAssigning}
          navigation={navigation}
          complaintsList={complaintsList}
          setComplaintsList={setComplaintsList}
          tasks={tasks}
        />
      ) : (
        <Employees />
      )}
    </View>
  );
};

const Tasks = ({
  selectedRole,
  complaintsList,
  setComplaintsList,
  setIsAssigning,
  navigation,
  tasks,
}) => {
  // const { selectedRole, setIsAssigning } =
  //   route.params?.userParam ?? "defaultValue";
  // const { selectedRole, complaintsList, setComplaintsList } = route.params;
  return (
    <View style={bodyStyles.listStyle}>
      <FlatList
        style={{ marginBottom: responsiveHeight(1) }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={tasks[selectedRole[0].toLowerCase()]}
        renderItem={({ item, index }) => {
          // console.log(item);
          return (
            <TabTasks
              item={item}
              index={index}
              selectedRole={selectedRole}
              complaintsList={complaintsList}
              setComplaintsList={setComplaintsList}
            />
          );
        }}
      />
      <TouchableOpacity
        style={[bodyStyles.assignButton]}
        disabled={selectedRole[0] == "Completed" ? true : false}
        onPress={() => {
          // setIsAssigning(true);
          console.log(complaintsList, "hello");
          navigation.navigate("Complaint Assign", {
            complaintsList,
            setIsAssigning,
          });
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: "white",
            fontWeight: "500",
            alignSelf: "center",
          }}
        >
          Assign
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Employees = () => {
  return (
    <View style={bodyStyles.listStyle}>
      <FlatList
        data={employees}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          // console.log(item);
          return <TabEmployees item={item} index={index} />;
        }}
      />
    </View>
  );
};

// const promisifySetComplaintList = (
//   complaintsList,
//   setComplaintsList,
//   setSt,
//   item
// ) => {
//   const succ = { msg: "success" };
//   return new Promise((resolve, reject) => {
//     if (complaintsList.indexOf(item.id) == -1) {
//       setComplaintsList([...complaintsList, item.id], () => resolve(succ));

//       setSt({ backgroundColor: "rgba(242, 121, 107, 0.6)" }, () =>
//         resolve(succ)
//       );
//     } else {
//       setComplaintsList(
//         complaintsList.filter((id) => {
//           return id != item.id;
//         }),
//         () => resolve(succ)
//       );
//       setSt({}, () => resolve(succ));
//     }
//     // resolve(succ);
//   });
// };

// async function tabButton(complaintsList, setComplaintsList, setSt, item) {
//   await promisifySetComplaintList(
//     complaintsList,
//     setComplaintsList,
//     setSt,
//     item
//   );
// }

const TabTasks = ({
  item,
  index,
  selectedRole,
  complaintsList,
  setComplaintsList,
}) => {
  const [st, setSt] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setSt({});
      };
    }, [])
  );

  return (
    <View style={[bodyStyles.itemContainer, st]}>
      <TouchableOpacity
        style={bodyStyles.itemSelectButton}
        disabled={selectedRole[0] == "Pending" ? false : true}
        onPress={() => {
          if (complaintsList.indexOf(item.id) == -1) {
            setComplaintsList([...complaintsList, item.id]);

            // setSt({ backgroundColor: "rgba(242, 121, 107, 0.6)" });
            setSt({
              borderColor: colors.color,
              borderWidth: responsiveWidth(0.5),
              elevation: 0,
            });
          } else {
            setComplaintsList(
              complaintsList.filter((id) => {
                return id != item.id;
              })
            );
            setSt({});
          }
        }}
      >
        <Text>{item.id}</Text>
        <Text>{item.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={bodyStyles.itemOpenButton}>
        <Feather name="chevron-right" size={responsiveWidth(5)} />
      </TouchableOpacity>
    </View>
  );
};

const TabEmployees = ({ item, index }) => {
  const [st, setSt] = useState({});
  return (
    <View style={[bodyStyles.itemContainer, st]}>
      <View style={bodyStyles.itemSelectButton}>
        <View style={bodyStyles.profileContainer}>
          <Image
            source={require("../../../assets/author-16.jpg")}
            style={{ height: responsiveHeight(7), width: responsiveWidth(18) }}
          />
          <View style={bodyStyles.nameContainer}>
            <Text>{item.name}</Text>
            <Text>{item.id}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={bodyStyles.itemOpenButton}>
        <Feather name="chevron-right" size={responsiveWidth(5)} />
      </TouchableOpacity>
    </View>
  );
};

const bodyStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: responsiveHeight(6),
  },
  headingContainer: {
    alignItems: "center",
  },
  headingText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "500",
  },
  roleText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
    color: colors.color,
  },
  summaryContainer: {
    flexDirection: "row",
    paddingTop: responsiveHeight(2),
  },
  summaryBox: {
    flexGrow: 1,
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  summaryHeading: {
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
  },
  summaryValue: {
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
    color: colors.color,
  },
  tabContainer: {
    flexDirection: "row",
    paddingTop: responsiveHeight(2),
    marginRight: responsiveWidth(2),
    marginLeft: responsiveWidth(2),
  },
  tab: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // width: "28%",
  },
  empButton: {
    // paddingTop: responsiveHeight(0.5),
    // paddingBottom: responsiveHeight(0.5),
    borderRadius: responsiveWidth(4),
    borderWidth: responsiveWidth(0.3),
    fontWeight: "500",
  },
  listStyle: {
    flex: 1,
    zIndex: -1,
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(1.5),
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2),
  },
  itemContainer: {
    flexDirection: "row",
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.5),
    borderColor: "rgba(0,0,0,0)",
    elevation: responsiveWidth(0.5),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    marginTop: responsiveHeight(0.4),
    marginBottom: responsiveHeight(0.4),
    // marginTop()
    zIndex: -1,
  },
  itemOpenButton: {
    flexGrow: 1,
    borderLeftWidth: responsiveWidth(0.2),
    alignItems: "center",
    justifyContent: "center",
  },
  itemSelectButton: {
    zIndex: -1,
    flexGrow: 4,
    paddingLeft: responsiveWidth(8),
  },
  assignButton: {
    backgroundColor: colors.color,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
  },
  profileContainer: { flexDirection: "row" },
  nameContainer: {
    alignItems: "center",
    paddingLeft: responsiveWidth(2),
    justifyContent: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  headerContainer: {
    backgroundColor: colors.color,
    // height: "17%",
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  drawerButton: {
    flexGrow: 1,
    alignItems: "flex-start",
    paddingTop: responsiveHeight(1),
    // justifyContent: "flex-start",
  },
  heading: {
    alignItems: "center",
    flexGrow: 1,
  },
  headingText: {
    alignSelf: "flex-start",
    fontSize: responsiveFontSize(3),
    fontWeight: "600",
    paddingTop: responsiveHeight(0.6),
    // paddingRight: responsiveWidth(8),
    color: "white",
  },
  deptName: {
    alignSelf: "center",
    color: "white",
    fontSize: responsiveFontSize(2.5),
    fontWeight: "500",
    paddingTop: responsiveHeight(1),
  },
  profileImageContainer: {
    paddingTop: responsiveHeight(1),
  },
  profileImage: {
    // borderWidth: responsiveWidth(0.5),
    borderColor: "white",
    borderRadius: responsiveWidth(15),
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    alignSelf: "center",
    // marginTop: responsiveHeight(-3),
  },
  profileImageButton: {
    backgroundColor: "white",
    width: responsiveWidth(26),
    borderRadius: responsiveWidth(15),
    alignSelf: "center",
    marginBottom: responsiveHeight(-6),
  },
});

export default Home;
