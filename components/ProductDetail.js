import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { Card } from "react-native-paper";

export default function App({ navigation, item }) {
  const [pet, setPet] = React.useState(null);

  const getPet = async () => {
    try {
      const response = await fetch(
        "http://localhost:1337/popular-pets/" + item.id
      );
      const json = await response.json();
      setPet(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getPet();
  }, []);

  return (
    <View style={styles.container}>
      <Card style={{ width: "100%" }}>
        <Image
          style={{ width: "100%", height: 200, resizeMode: "containt" }}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: 600, paddingLeft: 10 }}>
          Product Title
        </Text>
        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 10 }}>
          $500
        </Text>
      </Card>

      <Text style={{ paddingTop: 20 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
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
