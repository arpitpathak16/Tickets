import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import Signup from "./SignUp";

const Login = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleLogin = () => {
    // setName(name);
    // navigation.navigate("Home", { name: "User" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20 }}>Welcome Back!</Text>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/bg.jpg")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <FontAwesome
            name="phone"
            size={20}
            color="#888"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Mobile Number"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputIconContainer}>
          <FontAwesome
            name="lock"
            size={20}
            color="#888"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="Password"
            keyboardType="ascii-capable"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>New here? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={[styles.signupText, styles.signupLink]}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton_guest}
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Guest User</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    color: "blue",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  inputIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  loginButton_guest: {
    marginTop: 30,
    width: "40%",
    height: 50,
    backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    color: "brown",
    textDecorationLine: "underline",
  },
});

export default Login;
