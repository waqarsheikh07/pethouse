import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { Card } from "react-native-paper";
import { strapiURL } from "./ServerUrl";

export default function App({ navigation, item }) {
  const [isLoading, setLoading] = React.useState(true);
  const [pets, setPets] = React.useState([]);

  const getPets = async () => {
    try {
      console.log(strapiURL + "/animals");
      const response = await fetch(strapiURL + "/animals");
      const json = await response.json();
      setPets(json.data);
      console.log(pets);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getPets();
  }, []);

  return (
    <View style={styles.container}>
      <Card style={{ width: "100%" }}>
        <Image
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "600", paddingLeft: 10 }}>
          {/* {item.Name} */}
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 10 }}>
          {/* ${item.Price} */}
        </Text>
      </Card>

      <Text style={{ paddingTop: 20 }}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
