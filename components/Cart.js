import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TabNavigation from "./TabNavigation";

const cartData = [
  {
    id: 1,
    name: "Golden Retriever",
    price: 100,
    qty: 1,
  },
  {
    id: 2,
    name: "German Shephard",
    price: 400,
    qty: 2,
  },
];

function ListItem2({ name, price }) {
  return (
    <View style={styles.itemBox}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/catsdogs/cat1.jpg")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemtext}>{name}</Text>
        <Text style={styles.itemtext}>${price}</Text>
        <View style={styles.flex}>
          <Pressable onPress={() => console.log("- Clicked")}>
            <Text style={styles.sign}>-</Text>
          </Pressable>
          <Text style={styles.itemCount}>1</Text>
          <Pressable onPress={() => console.log("+ Clicked")}>
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const Qty = ({ qty }) => {
  const [quantity, setQuantity] = React.useState(qty);
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    setPrice(price * quantity);
  };
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Pressable onPress={decrement}>
        <Text
          style={{
            width: 20,
            height: 20,
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            borderRadius: 3,
          }}
        >
          -
        </Text>
      </Pressable>
      <Text style={{ fontSize: 14, marginHorizontal: 5 }}>{quantity}</Text>
      <Pressable onPress={increment}>
        <Text
          style={{
            width: 20,
            height: 20,
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            borderRadius: 3,
          }}
        >
          +
        </Text>
      </Pressable>
    </View>
  );
};

function ListItem({ item }) {
  return (
    <View
      style={{
        flexDirection: "row",
        overflow: "hidden",
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        alignContent: "center",
      }}
    >
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/catsdogs/cat1.jpg")}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={styles.itemtext}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>

        <Qty qty={item.qty} />
      </View>
    </View>
  );
}

function getPrice() {}

export default function Cart() {
  const [price, setPrice] = React.useState(getPrice());
  const [data, updateData] = React.useState(cartData);

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />

      <View style={styles.priceBox}>
        <View style={styles.flex1}>
          <Text style={styles.bold}> Subtotal </Text>
          <Text style={styles.text1}> $500 </Text>
        </View>
        <View style={styles.flex1}>
          <Text style={styles.bold}> Shipping Cost </Text>
          <Text style={styles.text1}> $10 </Text>
        </View>
        <View style={styles.flex1}>
          <Text style={styles.bold}> Total Cost </Text>
          <Text style={styles.text1}> $510 </Text>
        </View>

        <Pressable
          style={styles.proceedButton}
          onPress={() => console.log("Proceed Cart")}
        >
          <Text style={styles.proceedButtonText}>Preceed</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    fontFamily: "Libre Baskerville",
    marginVertical: 10,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: 20,
  },
  image: {
    position: "absolute",
    left: 0,
    width: 25,
    height: 25,
    marginLeft: 10,
  },

  itemBox: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#CCE9FE",
  },

  itemtext: {
    fontSize: 16,
  },
  sign: {
    fontSize: 22,
    lineHeight: 10,
    backgroundColor: "#CCE9FE",
    padding: 10,
  },
  flex: {
    margin: 10,
    flexDirection: "row",
  },
  itemCount: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 10,
    margin: 10,
  },
  priceBox: {
    marginHorizontal: 10,
    marginTop: 60,
  },
  flex1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 17,
    marginBottom: 10,
  },
  bold: {
    fontSize: 17,
    fontWeight: "bold",
  },
  proceedButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    marginTop: 16,
    borderRadius: 100,
    backgroundColor: "#0092F9",
  },
  proceedButtonText: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "600",
  },
});
