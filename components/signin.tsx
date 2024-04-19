import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import homeStyles from "../styles/home";
import DropdownComponent from "./dropdown";
import Popular from "./popular";
import Browse from "./browse";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const logo = {
  URL: "../assets/bg.jpg",
  width: 100,
  height: 64,
};

const signin = () => (
  <ScrollView>
    <Text style={styles.headingText}>Featured</Text>
    <Image style={styles.image} source={require("../assets/featured.png")} />
    <Text style={styles.headingText2}>AVA Festival</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  loc: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  headingText: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    // backgroundColor: "gray",
  },
  headingText2: {
    fontSize: 30,
    margin: 10,
    fontWeight: "bold",
    color: "brown",
    textAlign: "left",
    // backgroundColor: "gray",
  },
  image: {
    width: 300,
    height: 150,
    alignContent: "center",
    alignSelf: "center",
    margin: 10,
    borderRadius: 10,
  },
  viewmore: {
    flexDirection: "row",
    justifyContent: "flex-end", // Shift content to the right
    alignItems: "center",
    alignContent: "flex-end",
    margin: 10,
  },
});
export default signin;
