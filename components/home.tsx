import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import homeStyles from "../styles/home";
import DropdownComponent from "./dropdown";
import Popular from "./popular";
import Browse from "./browse";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
import ViewMore from "../screens/ViewMore";

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Text style={styles.headingText}>Featured</Text>
      <Image style={styles.image} source={require("../assets/featured.png")} />
      <Text style={styles.headingText2}>AVA Festival</Text>
      <Text style={{ marginLeft: 10 }}>Location Near</Text>
      <DropdownComponent />
      {/* <View style={{ borderBottomWidth: 3, borderBottomColor: "gray" }}></View> */}
      {/* <Text style={[styles.headingText, styles.headingText2]}>AVA Festival</Text> */}
      <Text style={styles.headingText}>Popular</Text>
      <Popular />
      <TouchableOpacity onPress={() => navigation.navigate("Popular")}>
        <View style={styles.viewmore}>
          <Text style={{ padding: 5, fontSize: 15 }}>View more</Text>
          <FontAwesome name="arrow-right" size={32} color={"gray"} />
        </View>
      </TouchableOpacity>

      <Text style={styles.headingText}>Browse</Text>
      <Browse />
      <TouchableOpacity onPress={() => navigation.navigate("Browse")}>
        <View style={styles.viewmore}>
          <Text style={{ padding: 5, fontSize: 15 }}>View more</Text>
          <FontAwesome name="arrow-right" size={32} color={"gray"} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

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
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "flex-end",
    margin: 10,
  },
});
export default Home;
