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
import { simpleURL, strapiURL } from "./ServerUrl";

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
    <Pressable onPress={() => naigation.navigate("ProductDetails")}>
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
            ${item.Price}
          </Text>
        </View>

        {/* {item.Thumb.data.map(({ attributes }) => (
          <Image
            style={{ width: 100, height: 80, resizeMode: "contain" }}
            source={{
              uri: strapiURL + attributes.url,
            }}
          />
          
        ))
        
        } */}

        <Image
          style={{ width: 100, height: "100%", resizeMode: "cover" }}
          source={{
            uri: simpleURL + item.Thumb.data[0].attributes.url,
          }}
        />

        <View
          style={{ padding: 8, justifyContent: "center", paddingVertical: 20 }}
        >
          <Text style={{ fontSize: 15 }}>{item.Name}</Text>
          <Text style={{ paddingTop: 5 }}>{item.Quantity} Pieces</Text>
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

      <Image
        style={{ height: 150, resizeMode: "cover" }}
        source={{
          uri: simpleURL + item.Thumb.data[0].attributes.url,
        }}
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
          {item.Name}
        </Text>
        <Text style={{ color: "white", paddingTop: 5 }}>${item.Price}</Text>
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
        renderItem={({ item }) => (
          <RenderSmallListItem item={item.attributes} />
        )}
        numColumns={numColumns}
        keyExtractor={(item, index) => index}
        style={{ padding: 5 }}
      />
    </View>
  );
}

export default function App({ Navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    try {
      console.log(strapiURL + "/animals");
      const response = await fetch(strapiURL + "/animals?populate=*");
      const json = await response.json();
      setPets(json.data);
      console.log(pets);
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
    <ScrollView>
      <View style={styles.container}>
        <TopSearchBar />
        <View style={{ paddingBottom: 20 }}>
          <DashboardHeading heading="Popular Animals" buttonText="" />
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <MyFlatList data={pets} numColumns={2} />
          )}

          <DashboardHeading heading="Achay Janwar" buttonText="" />
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={pets}
              renderItem={({ item }) => (
                <RenderListItem item={item.attributes} />
              )}
              keyExtractor={(item) => item.id}
              style={{ padding: 5 }}
            />
          )}
        </View>
      </View>
    </ScrollView>
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
