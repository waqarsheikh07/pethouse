import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import { Searchbar, Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const getData = () => [
  { name: "Dog1", price: 123, src: "../assets/catsdogs/cat1.jpg", pieces: 4 },
  { name: "Dog2", price: 7868, src: "../assets/catsdogs/cat1.jpg", pieces: 6 },
  { name: "Dog3", price: 9508, src: "../assets/catsdogs/cat1.jpg", pieces: 8 },
  {
    name: "Dog4",
    price: 5632,
    src: "../assets/catsdogs/cat1.jpg",
    pieces: 9,
  },
  { name: "Dog5", price: 5632, src: "../assets/catsdogs/cat1.jpg", pieces: 10 },
  { name: "Dog6", price: 5632, src: "../assets/catsdogs/cat1.jpg", pieces: 7 },
];

function TopSearchBar() {
  return (
    <View style={{ margin: 40, flexDirection: "row", flex: 1 }}>
      <Searchbar
        placeholder="Search"
        inputStyle={{
          fontSize: 14,
        }}
        style={{ flex: 1, height: 40, borderWidth: 1, borderColor: "#33A8FA" }}
      />

      <Pressable
        style={{
          height: 40,
          width: 40,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#33A8FA",
          borderRadius: 5,
          marginLeft: 10,
        }}
      >
        <Image
          style={{ width: 15, height: 15, tintColor: "white" }}
          source={require("../assets/filters.png")}
        />
      </Pressable>
    </View>
  );
}

function RenderListItem({ item }) {
  return (
    <Pressable>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 5,
          borderRadius: 10,
          borderWidth: 2,
          overflow: "hidden",
          borderColor: "#33A8FA",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#33A8FA",
            width: 100,
            height: 100,
            borderRadius: 50,
            position: "absolute",
            right: -20,
            justifyContent: "center",
            zIndex: 100,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              padding: 20,
              fontWeight: 600,
            }}
          >
            ${item.price}
          </Text>
        </View>
        <Image
          style={{ width: 100, height: 80 }}
          source={require("../assets/catsdogs/cat2.jpg")}
        />
        <View style={{ padding: 8, justifyContent: "center" }}>
          <Text style={{ fontWeight: "700", fontSize: 15 }}>{item.name}</Text>
          <Text style={{ paddingTop: 5 }}>{item.pieces} Pieces</Text>
        </View>
      </View>
    </Pressable>
  );
}

function RenderSmallListItem({ item }) {
  const [like, setLike] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        margin: 1,
        margin: 5,
        borderRadius: 10,
        borderWidth: 2,
        overflow: "hidden",
        borderColor: "#33A8FA",
      }}
    >
      <View
        style={{
          backgroundColor: "#33A8FA",
          width: 60,
          height: 60,
          borderRadius: 30,
          position: "absolute",
          right: -10,
          top: -10,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
          opacity: 0.7,
        }}
      >
        <Pressable onPress={() => setLike(!like)}>
          <MaterialCommunityIcons
            name="heart"
            size={34}
            color={"red"}
            style={{ opacity: 1 }}
          />
        </Pressable>
      </View>
      <Image
        style={{ width: "100%", height: 140 }}
        source={require("../assets/catsdogs/cat1.jpg")}
      />
      <View
        style={{
          padding: 8,
          borderTopWidth: 2,
          borderTopColor: "#33A8FA",
          backgroundColor: "#33A8FA",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            color: "white",
            fontSize: 15,
          }}
        >
          {item.name}
        </Text>
        <Text style={{ color: "white", paddingTop: 5 }}>${item.price}</Text>
      </View>
    </View>
  );
}

function DashboardHeading({ heading, buttonText }) {
  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      <Text style={{ fontWeight: "600" }}>{heading}</Text>
      <Text style={{ position: "absolute", right: 10 }}>{buttonText}</Text>
    </View>
  );
}

function MyFlatList({ data, numColumns }) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <RenderSmallListItem item={item} />}
        numColumns={numColumns}
        keyExtractor={(item, index) => index}
        style={{ padding: 5 }}
      />
    </View>
  );
}

export default function App({ data }) {
  const myData = getData();
  const smallList = getData();

  return (
    <SafeAreaView>
      <TopSearchBar />
      <ScrollView style={{ marginBottom: 50 }}>
        <View style={styles.container}>
          <View style={{ paddingBottom: 20 }}>
            <View style={{ padding: 10 }}>
              <Image
                style={styles.bottomImage}
                source={require("../assets/banner.png")}
              />
            </View>

            <MyFlatList data={myData} numColumns={2} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomImage: {
    width: "100%",
    resizeMode: "contain",
    height: 200,
  },
  like: {
    position: "absolute",
    right: 0,
  },
});
