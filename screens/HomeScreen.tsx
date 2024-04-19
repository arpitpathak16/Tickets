import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Home from "../components/home";
import Login from "./LoginScreen";
import Signup from "./SignUp";

const HomeScreen = ({ navigation, route }) => {
  //   const { name } = route.params;
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const drawerContent = (
    <View style={styles.drawerContent}>
      <Text style={styles.header2}>Welcome Back!</Text>

      <View style={styles.viewmore}>
        <FontAwesome name="bell" size={25} color={"brown"} />
        <Text style={styles.draw}>Notifications</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="user" size={25} color={"brown"} />
        <Text style={styles.draw}>Profile</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="search" size={25} color={"brown"} />
        <Text style={styles.draw}>Explore</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="question" size={25} color={"brown"} />
        <Text style={styles.draw}>FAQ</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="arrow-right" size={25} color={"brown"} />
        <Text style={styles.draw}>Logout</Text>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition={"left"}
      renderNavigationView={() => drawerContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.create}>
            <TouchableOpacity onPress={openDrawer}>
              <FontAwesome name="bars" size={25} color={"#000"} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>Logo</Text>
          </View>
          <View style={styles.maintain}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Login")}>
              <Text style={{ backgroundColor: "white", padding: 8 }}>
                SIGN IN
              </Text>
            </TouchableWithoutFeedback>
            <FontAwesome name="user" size={25} color={"#000"} />
          </View>
        </View>

        <Home />
        <View style={styles.header}>
          <View
            style={{ backgroundColor: "brown", padding: 2, borderRadius: 5 }}>
            <FontAwesome name="home" size={32} color={"#fff"} />
          </View>
          <FontAwesome name="compass" size={32} color={"#000"} />
          <FontAwesome name="search" size={32} color={"#000"} />
          <FontAwesome name="ticket" size={32} color={"#000"} />
          {/* <EvilIcons name="" size={32} color={"#000"} /> */}
        </View>

        {/* <StatusBar style="auto" /> */}
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  viewmore: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  draw: {
    margin: 10,
    fontSize: 15,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  create: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  maintain: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#0000",
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  header2: {
    fontSize: 25,
    // fontFamily: "helvatica",
    fontWeight: "700",
    backgroundColor: "#0000",
    padding: 25,
    width: "100%",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    // justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "brown",
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default HomeScreen;
