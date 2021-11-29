import * as React from "react";
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  AsyncStorage,
} from "react-native";
// import AsyncStorage from "react-native-community/async-storage";

export default function SplashScreen({ navigation }) {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen

      navigation.push("Auth");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={require("../assets/splashscreenimage.svg")}
      />
      <Image
        style={styles.bottomImage}
        source={require("../assets/bluebg.svg")}
      />
      <Image
        style={styles.button}
        source={require("../assets/buttonSplashScreen.svg")}
      />
      <Text style={styles.text}>Pick Your Favourite Pet Now</Text>

      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  topImage: {
    marginTop: 20,
    width: "80vw",
    height: "58vw",
    zIndex: 0, // works on ios
  },
  bottomImage: {
    position: "fixed",
    bottom: 0,
    height: "160vw",
    width: "100vw",
    zindex: "1",
    zIndex: 0, // works on ios
  },

  button: {
    position: "absolute",
    bottom: -300,
    zIndex: 100, // works on ios
    boxShadow: "5px 5px 10px rgba(0,0,0,0.3)",
    MozBorderRadius: "190px",
    WebkitBorderRadius: "190px",
  },

  text: {
    fontFamily: "arial",
    position: "absolute",
    bottom: -145,
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    zIndex: 100, // works on ios
    elevation: 100, // works on android
  },

  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
