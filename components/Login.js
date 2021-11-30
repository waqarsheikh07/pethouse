import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Span,
  ActivityIndicator,
  Alert,
} from "react-native";
import { TextInput, Card, Button, Switch } from "react-native-paper";

import axios from "axios";
import { styles as FormStyles } from "../MyStyles/FormStyles";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPasswrod] = React.useState("");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const Login = async (email, password) => {
    if (!email) {
      Alert.alert("Please fill Email");
      return;
    }
    if (!password) {
      Alert.alert("Please fill Password");
      return;
    }
    setLoading(true); // Request API.
    await axios
      .post("http://localhost:1337/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        navigation.replace("Dashboard");
        setLoading(false);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={{ width: 100, height: 85, resizeMode: "contain" }}
              source={require("../assets/Login/home.png")}
            />
          </View>

          <View style={styles.textView}>
            <Text style={styles.petText}>Pet</Text>
            <Text style={styles.houseText}> House</Text>
          </View>

          <View style={{ marginTop: 30 }}>
            <TextInput
              theme={{
                colors: { primary: "grey", outlineColor: "transparent" },
              }}
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
              theme={{
                colors: { primary: "grey", outlineColor: "transparent" },
              }}
              style={styles.input}
              label="Password"
              secureTextEntry
              onChangeText={(pas) => setPasswrod(pas)}
              mode="outlined"
              activeOutlineColor="#F2F2F2"
              outlineColor="#F2F2F2"
              right={<TextInput.Icon name="eye" size={16} color="#9A9999" />}
              left={<TextInput.Icon name="lock" size={16} color="#9A9999" />}
            />

            <View style={styles.toggle}>
              <Switch
                value={isSwitchOn}
                color="#0092F9"
                onValueChange={onToggleSwitch}
              />
              <Text style={styles.rememberMe}>Remember Me</Text>
              <Text style={styles.forgotPass}>Forgot Password?</Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              mode="contained"
              color="#0092F9"
              onPress={() => {
                Login(email, password);
              }}
              style={styles.buttons}
              labelStyle={{
                paddingTop: 5,
                fontSize: 16,
              }}
            >
              Sign In
            </Button>
            <Button
              mode="outlined"
              color="#0092F9"
              onPress={() => navigation.navigate("RegisterScreen")}
              style={styles.buttons}
              labelStyle={{
                color: "#0092F9",
                paddingTop: 5,
              }}
            >
              Create an account
            </Button>
          </View>

          <View style={styles.footer}>
            <View style={{ borderWidth: 0 }}>
              <Button
                icon="facebook"
                labelStyle={{ color: "#0092F9", fontSize: 26 }}
              />
            </View>
            <Button
              icon="instagram"
              labelStyle={{ color: "purple", fontSize: 26 }}
            />
            <Button
              icon="twitter"
              labelStyle={{ color: "blue", fontSize: 26 }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ...FormStyles,
});
