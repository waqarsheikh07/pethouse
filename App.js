import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/TabNavigation";

import Home from "./components/Home";
import { SafeAreaView } from "react-native";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import SplashScreen from "./components/SplashScreen";
import Myaccount from "./components/Myaccount";
import Login from "./components/Login";
import SignUp from "./components/signUp";
import HomScreen from "./components/HomeScreen";

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
