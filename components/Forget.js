import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Span,
} from "react-native";
import { TextInput, Card, Button, Switch } from "react-native-paper";

export default function SplashScreen({ navigation }) {
  const [email, setEmail] = React.useState("");

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 200, height: 150, resizeMode: "contain" }}
          source={require("../assets/Login/home.png")}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.petText}>Pet</Text>
        <Text style={styles.houseText}> House</Text>
      </View>
      <View
        style={{
          width: "80%",
        }}
      >
        <Text style={styles.forgot}>Forgot Password?</Text>
        <Text>Enter Your Email Below</Text>

        <TextInput
          theme={{ colors: { primary: "grey", outlineColor: "transparent" } }}
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          keyboardType="email-address"
          activeOutlineColor="#F2F2F2"
          outlineColor="#F2F2F2"
          left={<TextInput.Icon name="email" size={16} color={"#9A9999"} />}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          color="#0092F9"
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.buttons}
          labelStyle={{ paddingTop: 3 }}
        >
          Recover Email
        </Button>
      </View>
      <View style={styles.footer}>
        <View style={{ borderWidth: 0 }}>
          <Button
            icon="facebook"
            labelStyle={{ color: "#0092F9", fontSize: 26 }}
          ></Button>
        </View>
        <Button
          icon="instagram"
          labelStyle={{ color: "purple", fontSize: 26 }}
        ></Button>
        <Button
          icon="twitter"
          labelStyle={{ color: "blue", fontSize: 26 }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingTop: 20,
  },

  textView: {
    paddingVertical: 10,

    flexDirection: "row",
    flexWrap: "wrap",
  },
  petText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  houseText: {
    color: "#0092F9",
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
  },
  buttons: {
    marginTop: 5,
    height: 40,
  },
  buttonsContainer: {
    paddingTop: 20,
  },
  footer: {
    paddingTop: 40,
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  toggle: {
    flexDirection: "row",
    paddingTop: 15,
    flex: 1,
  },
  forgotPass: {
    marginLeft: "auto",
    color: "#D63909",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
  },
  rememberMe: {
    paddingLeft: 5,
  },
  forgot: {
    alignSelf: "center",
    fontSize: 20,
    color: "black",
    marginBottom: 30,

    fontWeight: "700",

    margin: 10,
  },
});
