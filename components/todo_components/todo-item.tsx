import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface todos {
  text: string;
  key: number ;
  pressHandler: (key: number) => void;
}

export default function TodoItem({ text, pressHandler, key }: todos) {
  return (
    <TouchableOpacity onPress={() => pressHandler(key)}>
      <Text style={styles.item} >{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: "whitesmoke",
    borderWidth: 1,
    marginVertical: 18,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#000",
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "600",
  },
});
