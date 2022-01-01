import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";
import SignUp from "../components/signUp";

import Tabs from "../components/TabNavigation";
import Home from "../components/Home";
import { SafeAreaView } from "react-native";
import Dashboard from "../components/Dashboard";
import Cart from "../components/Cart";
import SplashScreen from "../components/SplashScreen";
import Myaccount from "../components/Myaccount";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="DashBoard" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
