import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Home from "../components/home";
import Login from "./LoginScreen";
import Signup from "./SignUp";
// import Popular from "../components/popular";
import Browse from "../components/browse";
import MapView, { Marker } from "react-native-maps";

const Event = ({ navigation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image
          style={styles.image}
          source={require("../assets/pop-img1.jpeg")}
        />
        <Text style={styles.headingText}>
          2024 SHANGHAI/BEIJING/GHANGZHOU INTERNATIONAL REAL STATE EXHIBITION
        </Text>
        <Text style={{ marginLeft: 10, color: "brown", fontWeight: "500" }}>
          Shanghai mart expo
        </Text>
        <View style={styles.share}>
          <View style={styles.viewmore}>
            <FontAwesome name="map" size={20} color={"gray"} />
            <Text style={{ padding: 5, fontSize: 15 }}>Shanghai</Text>
          </View>
          <View style={styles.sharediv}>
            <FontAwesome name="share" size={20} color={"white"} />
          </View>
        </View>

        <Text style={styles.headingText}>5-7 JULY</Text>
        <Text style={{ marginLeft: 10 }}>Opens at 09:00 GMT+08:00</Text>

        <View style={styles.separator} />
        <Text style={styles.headingText}>About</Text>
        <>
          <Text style={styles.text}>
            2024 Shanghai 24th Internaitonal Property & Investment Immigration
            Expo Ovesaeas Home Buyers | Investment Immigration | Study Abroad
            July 5th-7th, 2024, 2024. Shanghai Mart Expo Exhibition Overview.
            The Shanghai International Property & Ivestment Immigration
            Exhibition is main for growing overseas home...{" "}
            {isExpanded ? (
              <Text style={styles.expandedText}>
                Expanded text that will be shown when "Read more" is clicked.
              </Text>
            ) : null}
          </Text>
          <TouchableOpacity onPress={toggleExpand}>
            <Text style={styles.readMore}>
              {isExpanded ? "Read less" : "Read more"}
            </Text>
          </TouchableOpacity>
        </>
        <Text style={styles.headingText}>Organized By</Text>
        <View style={styles.footer}>
          <View style={styles.viewmore}>
            <FontAwesome name="building" size={20} color={"gray"} />
            <Text style={{ color: "brown", fontWeight: "800", fontSize: 15 }}>
              Shanghai Qisheng Exhibition Co., Ltd
            </Text>
          </View>
          <View style={styles.wishlist2}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              Follow Organiser
            </Text>
          </View>
        </View>
        <Text style={styles.headingText}>Organized By</Text>
        <View style={styles.viewmore}>
          <FontAwesome name="globe" size={22} color={"gray"} />
          <Text
            style={{
              margin: 5,
              color: "brown",
              fontWeight: "800",
              fontSize: 15,
            }}>
            Shanghai Qisheng Exhibition Co., Ltd
          </Text>
        </View>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title="Expo Location"
              description="This is the location of the expo"
            />
          </MapView>
        </View>
        <View style={styles.wishlist3}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
            GET DIRECTIONS
          </Text>
        </View>
        <View style={styles.separator} />
        <Text
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            fontWeight: "700",
          }}>
          Are you looking for a different event?
        </Text>
        <Text
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            color: "gray",
          }}>
          Check out more events by this event Organiser.
        </Text>
        <Text
          style={{
            marginTop: 5,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            fontSize: 22,
            fontWeight: "700",
          }}>
          More Exciting Events by Shanghai Qisheing Exhibition Co.,Ltd
        </Text>
        <Browse></Browse>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Tickets are not available!</Text>
        <View style={styles.wishlist}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Join Wishlist
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sharediv: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  share: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  text: {
    margin: 10,
  },
  expandedText: {
    // Add styles for the expanded text if needed
  },
  readMore: {
    color: "brown",
    fontStyle: "italic",
    marginLeft: 10,
  },
  mapContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
  },
  map: {
    height: 250,
    width: "80%",
  },
  wishlist: {
    marginTop: 10,
    backgroundColor: "brown",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  wishlist2: {
    marginTop: 10,
    backgroundColor: "black",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  wishlist3: {
    marginTop: 10,
    backgroundColor: "black",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 56,
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  headingText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
    marginVertical: 10,
  },
  footer: {
    margin: 20,
    backgroundColor: "#e4aa77",
    padding: 10,
    borderRadius: 10,
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
  },
  separator: {
    height: 1,
    width: "100%",
    margin: 10,
    backgroundColor: "#CCCCCC",
  },
  headingText2: {
    fontSize: 30,
    margin: 10,
    fontWeight: "bold",
    color: "brown",
    textAlign: "left",
    // backgroundColor: "gray",
  },
  viewmore: {
    flexDirection: "row",
    justifyContent: "flex-start", // Shift content to the right
    alignItems: "center",
    alignContent: "flex-start",
    margin: 10,
  },
});

export default Event;
