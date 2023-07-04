import { React, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import colors, { buttons } from "../../assets/css";

const LoginForm = ({ setLoggedIn }) => {
  const [logging, setLogging] = useState(false);
  if (!logging) {
    return <DefaultLogin setLogging={setLogging} />;
  }
  return <LoginForm1 setLoggedIn={setLoggedIn} />;
};

const LoginForm1 = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView
      style={styles.formContainer}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View style={styles.buttonContainer}>
        <TextInput
          autoCorrect={false}
          placeholder={"EMAIL"}
          style={styles.inputStyle}
          value={email}
          onChange={(input) => setEmail(input)}
        />
        <TextInput
          autoCorrect={false}
          secureTextEntry={true}
          placeholder={"PASSWORD"}
          style={styles.inputStyle}
          value={password}
          onChange={(input) => setPassword(input)}
        />
        <TouchableOpacity
          onPress={() => {
            setLoggedIn(true);
          }}
          style={buttons.buttonStyle}
        >
          <Text style={buttons.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.horinzontalBar}></View>
        <View style={styles.signUpStyle}>
          {/* <Text style={styles.signUpText}>Don't have an account?</Text> */}
          <TouchableOpacity>
            <Text style={styles.signUpText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signUpLink}>
        <TouchableOpacity style={styles.newAccountButtonStyle}>
          <Text style={styles.buttonText}>CREATE NEW ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const DefaultLogin = ({ setLogging }) => {
  return (
    <View style={[styles.buttonContainer]}>
      <TouchableOpacity style={buttons.buttonStyle}>
        <Text style={buttons.buttonText}>CREATE NEW ACCOUNT</Text>
      </TouchableOpacity>
      <View
        style={{
          // alignSelf: "center",
          // flexDirection: "column",
          paddingTop: responsiveHeight(3),
          paddingBottom: responsiveHeight(3),
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.orTextStyle}>OR</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setLogging(true);
        }}
        style={buttons.buttonStyle}
      >
        <Text style={buttons.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    // flexGrow: 2,
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    height: 0,
    flexGrow: 4,
    flexBasis: "auto",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
    marginBottom: responsiveHeight(7),
    width: "100%",
  },

  inputStyle: {
    color: "black",
    width: "90%",
    paddingLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(1.5),
    borderColor: colors.color,
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.5),
    borderStyle: "solid",
  },
  orTextStyle: {
    color: colors.color,
  },
  horinzontalBar: {
    backgroundColor: "grey",
    width: "70%",
    height: responsiveHeight(0.2),
    marginTop: responsiveHeight(5),
    alignSelf: "center",
  },

  signUpStyle: {
    // flex: 1,
    marginTop: responsiveHeight(5),
  },
  signUpText: {
    fontWeight: "bold",
    color: "black",
    fontSize: responsiveFontSize(2),
  },
  signUpLink: {
    flex: 1,
    flexGrow: 0.4,
    flexDirection: "column",
    // paddingLeft: responsiveWidth(1),
    // paddingRight: responsiveWidth(1),
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "flex-end",
    // paddingTop: responsiveHeight(10),
    paddingBottom: responsiveHeight(0.5),
  },
  newAccountButtonStyle: {
    backgroundColor: "white",
    borderRadius: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
    borderColor: colors.color,
    borderWidth: responsiveWidth(1),
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
  },
});

export default LoginForm;
