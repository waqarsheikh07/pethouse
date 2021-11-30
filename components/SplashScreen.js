// import * as React from "react";
// import {
//   ActivityIndicator,
//   Text,
//   View,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   AsyncStorage,
// } from "react-native";
// // import AsyncStorage from "react-native-community/async-storage";
// //
// export default function SplashScreen() {
//   //State for ActivityIndicator animation
//   const [animating, setAnimating] = React.useState(true);

//   // React.useEffect(() => {
//   //   setTimeout(() => {
//   //     setAnimating(false);
//   //     //Check if user_id is set or not
//   //     //If not then send for Authentication
//   //     //else send to Home Screen

//   //     // navigation.push("Auth");
//   //   }, 2000);
//   // }, []);

//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.topImage}
//         source={require("../assets/splashscreenimage.svg")}
//       />
//       <Image
//         style={styles.bottomImage}
//         source={require("../assets/bluebg.svg")}
//       />
//       <Image
//         style={styles.button}
//         source={require("../assets/buttonSplashScreen.svg")}
//       />
//       <Text style={styles.text}>Pick Your Favourite Pet Now</Text>

//       <ActivityIndicator
//         animating={animating}
//         color="#FFFFFF"
//         size="large"
//         style={styles.activityIndicator}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     flex: 1,
//     backgroundColor: "white",
//   },
//   topImage: {
//     marginTop: 20,
//     width: "80vw",
//     height: "58vw",
//   },
//   bottomImage: {
//     // position: "fixed",
//     // bottom: 0,
//     // height: "160vw",
//     // width: "100vw",
//   },

//   button: {
//     position: "absolute",
//     bottom: -300,
//   },

//   text: {
//     fontFamily: "arial",
//     position: "absolute",
//     bottom: -145,
//     fontSize: 20,
//     fontWeight: "600",
//     color: "white",
//   },

//   activityIndicator: {
//     alignItems: "center",
//     height: 80,
//   },
// });

import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={require("../assets/splashScreenImage.png")}
      />
      <Image
        style={styles.bottomImage}
        source={require("../assets/bluebg.png")}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push("Auth");
        }}
      >
        <Image
          style={{ height: 150, width: 150 }}
          source={require("../assets/buttonSplashScreen.png")}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Pick Your Favourite Pet Now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  topImage: {
    marginTop: 70,
    width: 400,
    height: 200,
    resizeMode: "contain",
    zIndex: 100,
  },
  bottomImage: {
    position: "absolute",
    bottom: -50,
    height: 500,
    width: 400,
  },

  button: {
    position: "absolute",
    bottom: 30,
    zIndex: 100, // works on ios
  },

  text: {
    position: "absolute",
    bottom: 220,
    fontSize: 20,
    fontWeight: "700",

    color: "white",
  },
});
