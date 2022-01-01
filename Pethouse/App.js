import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/TabNavigation";
import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaView } from "react-native";

import Home from "./components/Home";

import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import SplashScreen from "./components/SplashScreen";
import Myaccount from "./components/Myaccount";

import Login from "./components/Login";
import SignUp from "./components/signUp";

import HomScreen from "./components/HomeScreen";
import SavedAds from "./components/SavedAds";
import Forget from "./components/Forget";
import ProductDetail from "./components/ProductDetail";
const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forget"
        component={Forget}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={SignUp}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="Dashboard"
          component={Tabs}
          // Hiding header for Navigation Drawer
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
