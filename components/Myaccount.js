import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const getprofileData = () => [
  { name: "Profile", icon: "account" },
  { name: "Notification", icon: "bell" },
  { name: "My Order", icon: "cart" },
  { name: "Payment", icon: "bank" },
  { name: "Address", icon: "home" },
  { name: "Favourite", icon: "heart" },
  { name: "Language", icon: "translate" },
  { name: "Setting", icon: "cog" },
];

function Renderlist({ item }) {
  return (
    <Pressable>
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 10,
          paddingLeft: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "left",
            alignItems: "Center",
          }}
        >
          <MaterialCommunityIcons name={item.icon} size={34} color={"black"} />
          <Text style={{ fontSize: 17, paddingLeft: 15 }}>{item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function Myaccount() {
  const myData = getprofileData();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 1,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginTop: 40,
            paddingBottom: 10,
          }}
        >
          My Account
        </Text>

        <Image
          style={{ height: 70, width: 70, marginBottom: 20 }}
          source={require("../assets/Myaccount/Profileimage.png")}
        />

        <Text style={{ color: "white", fontSize: 15 }}>Hammad Shahzad</Text>

        <Text style={{ color: "white", fontSize: 15 }}>
          hammadbiz@gmail.com
        </Text>
      </View>
      <ImageBackground
        style={styles.bottomimage}
        source={require("../assets/Myaccount/bottom.png")}
      >
        <View
          style={{
            marginTop: 150,
            paddingLeft: 20,
          }}
        >
          <FlatList
            data={myData}
            renderItem={({ item }) => <Renderlist item={item} />}
            keyExtractor={(item, index) => index}
            style={{ padding: 5 }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0092F9",
  },

  bottomimage: {
    height: 700,
    position: "relative",
    width: "100%",
  },
});
