import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.bg}>
      <Text>Welcome to Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
