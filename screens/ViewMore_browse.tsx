import React from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ViewMore_browse = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate("Event")}>
          <View style={styles.makeImage}>
            <Image
              source={require("../assets/pop-img6.jpeg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>

        <Text style={{ color: "gray", alignSelf: "flex-start" }}>
          FRIDAY 5 JUL, 2024
        </Text>
        <Text style={styles.cardText}>
          2024 Shanghai / Beijing / Guangzhou International Real Estate
          Exhibition
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
        <TouchableOpacity>
          <View style={styles.makeImage}>
            <Image
              source={require("../assets/pop-img5.jpeg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>

        <Text style={{ color: "gray", alignSelf: "flex-start" }}>
          FRIDAY 5 JUL, 2024
        </Text>
        <Text style={styles.cardText}>
          2024 Shanghai / Beijing / Guangzhou International Real Estate
          Exhibition
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
        <TouchableOpacity>
          <View style={styles.makeImage}>
            <Image
              source={require("../assets/pop-img4.jpeg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>

        <Text style={{ color: "gray", alignSelf: "flex-start" }}>
          FRIDAY 5 JUL, 2024
        </Text>
        <Text style={styles.cardText}>
          2024 Shanghai / Beijing / Guangzhou International Real Estate
          Exhibition
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
          $20.00
        </Text>
      </View>
      <View style={styles.card}>
        <TouchableOpacity>
          <View style={styles.makeImage}>
            <Image
              source={require("../assets/pop-img3.jpeg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>

        <Text style={{ color: "gray", alignSelf: "flex-start" }}>
          FRIDAY 5 JUL, 2024
        </Text>
        <Text style={styles.cardText}>
          2024 Shanghai / Beijing / Guangzhou International Real Estate
          Exhibition
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
        <TouchableOpacity>
          <View style={styles.makeImage}>
            <Image
              source={require("../assets/pop-img2.jpeg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>

        <Text style={{ color: "gray", alignSelf: "flex-start" }}>
          FRIDAY 5 JUL, 2024
        </Text>
        <Text style={styles.cardText}>
          2024 Shanghai / Beijing / Guangzhou International Real Estate
          Exhibition
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  makeImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  viewmore: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginVertical: 5,
  },
  cardText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardImage: {
    width: 250,
    height: 150,
    resizeMode: "cover",
    borderRadius: 5,
    // margin: 20,
  },
});

export default ViewMore_browse;
