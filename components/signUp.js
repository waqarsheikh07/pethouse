import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Span,
  Linking,
} from "react-native";
import { TextInput, Card, Button, Switch } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";

import axios from "axios";

export default function Signup({ navigation }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPasswrod] = React.useState("");

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  // Request API.
  // Add your own code here to customize or restrict how the public can register new users.
  const Register = async (name, email, password) => {
    await axios
      .post("http://localhost:1337/auth/local/register", {
        username: name,
        email,
        password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 100, height: 85, resizeMode: "contain" }}
          source={require("../assets/Login/home.png")}
        />
      </View>
      <View>
        <Text style={styles.petText}>
          Pet <Text style={styles.houseText}>House</Text>
        </Text>
      </View>

      <View style={styles.inputs}>
        <TextInput
          theme={{ colors: { primary: "grey", outlineColor: "transparent" } }}
          style={styles.input}
          label="Username"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          keyboardType="default"
          activeOutlineColor="#F2F2F2"
          outlineColor="#F2F2F2"
          left={<TextInput.Icon name="face" size={20} color={"#9A9999"} />}
        />
        <TextInput
          theme={{ colors: { primary: "grey", outlineColor: "transparent" } }}
          style={styles.input}
          label="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          mode="outlined"
          keyboardType="phone"
          activeOutlineColor="#F2F2F2"
          outlineColor="#F2F2F2"
          left={<TextInput.Icon name="phone" size={16} color={"#9A9999"} />}
        />
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
        <TextInput
          theme={{ colors: { primary: "grey", outlineColor: "transparent" } }}
          style={styles.input}
          label="Password"
          onChangeText={(pas) => setPasswrod(pas)}
          secureTextEntry
          mode="outlined"
          activeOutlineColor="#F2F2F2"
          outlineColor="#F2F2F2"
          right={<TextInput.Icon name="eye" size={16} color="#9A9999" />}
          left={<TextInput.Icon name="lock" size={16} color="#9A9999" />}
        />
        <TextInput
          theme={{ colors: { primary: "grey", outlineColor: "transparent" } }}
          style={styles.input}
          label="Confirm Password"
          secureTextEntry
          mode="outlined"
          activeOutlineColor="#F2F2F2"
          outlineColor="#F2F2F2"
          right={<TextInput.Icon name="eye" size={16} color="#9A9999" />}
          left={<TextInput.Icon name="lock" size={16} color="#9A9999" />}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          color="#0092F9"
          // onPress={async () => Register(name, email, password)}
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.buttons}
          labelStyle={{ paddingTop: 3 }}
        >
          Sign Up
        </Button>
        <Text style={styles.haveAccount}>
          {" "}
          Already have an account?
          <Text
            style={{ color: "#0092F9" }}
            onPress={() => Linking.openURL("../SignIn")}
          >
            {" "}
            Sign In
          </Text>
        </Text>
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
    width: "80vw",
  },
  buttons: {
    marginTop: 5,
    height: 40,
    width: "80vw",
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
  haveAccount: {
    textAlign: "center",
    marginTop: 15,
  },
});
