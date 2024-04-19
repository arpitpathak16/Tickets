import { useRef, useState } from "react";
import { StatusBar, Image } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import Signup from "./screens/SignUp";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import Event from "./screens/Event";
import ViewMore from "./screens/ViewMore";
import ViewMore_browse from "./screens/ViewMore_browse";

// const Stack = createNativeStackNavigator();
// export default function App() {
//   // return <HomeScreen />;
//   return <Event />;
//   // return <Signup />;
// }

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Login" component={Login} />
//       <Drawer.Screen name="Signup" component={Signup} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
          // navigation={navigation}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Event" component={Event} options={{}} />
        <Stack.Screen name="Popular" component={ViewMore} options={{}} />
        <Stack.Screen name="Browse" component={ViewMore_browse} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
