import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Searchbar, Button } from "react-native-paper";

function TopSearchBar() {
  return (
    <View style={{ margin: 10, flexDirection: "row", flex: 1 }}>
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
              fontWeight: "600",
            }}
          >
            ${item.price}
          </Text>
        </View>

        {item.thumb.map(({ url }) => (
          <Image
            style={{ width: 100, height: 80, resizeMode: "contain" }}
            source={{
              uri: "http://localhost:1337" + url,
            }}
          />
        ))}

        <View style={{ padding: 8, justifyContent: "center" }}>
          <Text style={{ fontWeight: "700", fontSize: 15 }}>
            {item.name} {console.log(item.thumb)}
          </Text>
          <Text style={{ paddingTop: 5 }}>{item.pieces} Pieces</Text>
        </View>
      </View>
    </Pressable>
  );
}

function RenderSmallListItem({ item }) {
  const [like, setLike] = useState(false);
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
            color={like ? "red" : "white"}
            style={{ opacity: like ? 1 : 0.5 }}
          />
        </Pressable>
      </View>

      {item.thumb.map(({ url }) => (
        <Image
          style={{ width: "100%", height: 150, resizeMode: "contain" }}
          source={{
            uri: "http://localhost:1337" + url,
          }}
        />
      ))}

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
            fontWeight: 700,
            color: "white",
            fontSize: 15,
          }}
        >
          {item.name} {console.log(item)}
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

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    try {
      const response = await fetch("10.0.2.2:1337/popular-pets");
      const json = await response.json();
      setPets(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TopSearchBar />
          <View style={{ paddingBottom: 20 }}>
            <DashboardHeading heading="Popular Pets" buttonText="See All" />
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <MyFlatList data={pets.slice(0, 2)} numColumns={2} />
            )}

            <DashboardHeading heading="Best Price" buttonText="See All" />
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={pets}
                renderItem={({ item }) => <RenderListItem item={item} />}
                keyExtractor={(item) => item.id}
                style={{ padding: 5 }}
              />
            )}
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
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 8,
  },
  leftBox: {
    backgroundColor: "#D63909",

    width: 34,
    height: 34,
  },
  textCatagory: {
    fontFamily: "Libre Baskerville",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 22,
    color: "#353434",
    margin: 8,
  },
  Catorgries: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  papularPet: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  viewAllText: {
    marginHorizontal: 8,
  },
  papularPetImageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bestPriceImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  papularPetImage: {
    width: "40%",
    height: 150,
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
  },
  bestPrice: {
    width: "90%",
    height: 80,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 15,
  },
  like: {
    position: "absolute",
    right: 0,
  },
});
