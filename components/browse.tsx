import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import homeStyles from "../styles/home";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const logo = {
  URL: "../assets/bg.jpg",
  width: 100,
  height: 64,
};

const Browse = () => (
  <ScrollView horizontal={true} style={styles.container}>
    <View style={styles.card}>
      <View style={styles.makeImage}>
        <Image
          source={require("../assets/pop-img6.jpeg")}
          // style={styles.cardImage}
          style={{
            width: "100%",
            height: "100%",
            padding: 2,
            marginBottom: 5,
            borderRadius: 5,
          }}
          resizeMode="cover"
        />
      </View>

      <Text style={{ color: "gray", alignSelf: "flex-start" }}>
        FRIDAY 5 JUL, 2024
      </Text>
      <Text style={styles.cardText}>
        2024 Shanghai / Beijing / Guangzhou International Real Estate Exhibition
      </Text>

      <View style={styles.viewmore}>
        <FontAwesome name="building" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai mart expo</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="map" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai</Text>
      </View>
      <Text
        style={{
          color: "black",
          alignSelf: "flex-start",
          fontStyle: "italic",
          marginTop: 5,
        }}>
        $5.00
      </Text>
    </View>
    <View style={styles.card}>
      <View style={styles.makeImage}>
        <Image
          source={require("../assets/pop-img5.jpeg")}
          // style={styles.cardImage}
          style={{
            width: "100%",
            height: "100%",
            padding: 2,
            marginBottom: 5,
            borderRadius: 5,
          }}
          resizeMode="cover"
        />
      </View>

      <Text style={{ color: "gray", alignSelf: "flex-start" }}>
        FRIDAY 5 JUL, 2024
      </Text>
      <Text style={styles.cardText}>
        2024 Shanghai / Beijing / Guangzhou International Real Estate Exhibition
      </Text>

      <View style={styles.viewmore}>
        <FontAwesome name="building" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai mart expo</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="map" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai</Text>
      </View>
      <Text
        style={{
          color: "black",
          alignSelf: "flex-start",
          fontStyle: "italic",
          marginTop: 5,
        }}>
        NOT YET ON SALE
      </Text>
    </View>
    <View style={styles.card}>
      <View style={styles.makeImage}>
        <Image
          source={require("../assets/pop-img4.jpeg")}
          // style={styles.cardImage}
          style={{
            width: "100%",
            height: "100%",
            padding: 2,
            marginBottom: 5,
            borderRadius: 5,
          }}
          resizeMode="cover"
        />
      </View>

      <Text style={{ color: "gray", alignSelf: "flex-start" }}>
        FRIDAY 5 JUL, 2024
      </Text>
      <Text style={styles.cardText}>
        2024 Shanghai / Beijing / Guangzhou International Real Estate Exhibition
      </Text>

      <View style={styles.viewmore}>
        <FontAwesome name="building" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai mart expo</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="map" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai</Text>
      </View>
      <Text
        style={{
          color: "black",
          alignSelf: "flex-start",
          fontStyle: "italic",
          marginTop: 5,
        }}>
        NOT YET ON SALE
      </Text>
    </View>
    <View style={styles.card}>
      <View style={styles.makeImage}>
        <Image
          source={require("../assets/pop-img3.jpeg")}
          // style={styles.cardImage}
          style={{
            width: "100%",
            height: "100%",
            padding: 2,
            marginBottom: 5,
            borderRadius: 5,
          }}
          resizeMode="cover"
        />
      </View>

      <Text style={{ color: "gray", alignSelf: "flex-start" }}>
        FRIDAY 5 JUL, 2024
      </Text>
      <Text style={styles.cardText}>
        2024 Shanghai / Beijing / Guangzhou International Real Estate Exhibition
      </Text>

      <View style={styles.viewmore}>
        <FontAwesome name="building" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai mart expo</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="map" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai</Text>
      </View>
      <Text
        style={{
          color: "black",
          alignSelf: "flex-start",
          fontStyle: "italic",
          marginTop: 5,
        }}>
        NOT YET ON SALE
      </Text>
    </View>
    <View style={styles.card}>
      <View style={styles.makeImage}>
        <Image
          source={require("../assets/pop-img2.jpeg")}
          // style={styles.cardImage}
          style={{
            width: "100%",
            height: "100%",
            padding: 2,
            marginBottom: 5,
            borderRadius: 5,
          }}
          resizeMode="cover"
        />
      </View>

      <Text style={{ color: "gray", alignSelf: "flex-start" }}>
        FRIDAY 5 JUL, 2024
      </Text>
      <Text style={styles.cardText}>
        2024 Shanghai / Beijing / Guangzhou International Real Estate Exhibition
      </Text>

      <View style={styles.viewmore}>
        <FontAwesome name="building" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai mart expo</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="map" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai</Text>
      </View>
      <Text
        style={{
          color: "black",
          alignSelf: "flex-start",
          fontStyle: "italic",
          marginTop: 5,
        }}>
        NOT YET ON SALE
      </Text>
    </View>
    <View style={styles.card}>
      <View style={styles.makeImage}>
        <Image
          source={require("../assets/pop-img1.jpeg")}
          // style={styles.cardImage}
          style={{
            width: "100%",
            height: "100%",
            padding: 2,
            marginBottom: 5,
            borderRadius: 5,
          }}
          resizeMode="cover"
        />
      </View>

      <Text style={{ color: "gray", alignSelf: "flex-start" }}>
        FRIDAY 5 JUL, 2024
      </Text>
      <Text style={styles.cardText}>
        2024 Shanghai / Beijing / Guangzhou International Real Estate Exhibition
      </Text>

      <View style={styles.viewmore}>
        <FontAwesome name="building" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai mart expo</Text>
      </View>
      <View style={styles.viewmore}>
        <FontAwesome name="map" size={15} color={"gray"} />
        <Text style={{ padding: 5, fontSize: 15 }}>Shanghai</Text>
      </View>
      <Text
        style={{
          color: "black",
          alignSelf: "flex-start",
          fontStyle: "italic",
          marginTop: 5,
        }}>
        NOT YET ON SALE
      </Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  makeImage: {
    width: 250,
    height: 150,
    borderRadius: 10,
    // backgroundColor: "red",
    padding: 8,
    marginBottom: 5,
  },
  viewmore: {
    flexDirection: "row",
    justifyContent: "flex-start", // Shift content to the right
    alignItems: "center",
    alignSelf: "flex-start",
    alignContent: "flex-start",
    margin: 2,
  },
  container: {
    padding: 8,
    // backgroundColor: "brown",
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "brown",
    textAlign: "left",
    backgroundColor: "gray",
  },
  image: {
    width: 300,
    height: 150,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 250,
    height: 350,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    // Add shadow effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
    flexDirection: "column",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardImage: {
    width: 250,
    height: 100,
    resizeMode: "contain",
    borderRadius: 5,
    margin: 20,
  },
  cardElevated: {},
});
export default Browse;
