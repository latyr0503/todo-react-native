import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 30,
    backgroundColor: "coral",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingTop: 30,
    textAlign: "center",
  },
});
