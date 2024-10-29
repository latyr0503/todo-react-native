import React, { useState } from "react";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, StyleSheet, View } from "react-native";
export default function TabThreeScreen() {
  const [name, setName] = useState("A.latyr SENE");
  
  const clickHandler = () => {
    setName("Diarra bousso DIOP");
  };
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Hello, my name is {name}</ThemedText>
      <ThemedText type="defaultSemiBold">
        Tab Three Screen Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Delectus vel qui natus perspiciatis voluptate sint aliquid
        necessitatibus dolorum voluptatibus error! Molestiae iste autem dicta
        quas labore ut veniam. Deserunt, optio!
      </ThemedText>
      <View style={styles.buttonContainer}>
        <Button title="changer le nom" onPress={clickHandler} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 100,
    paddingHorizontal: 50,
    gap: 30,
  },
  buttonContainer: {
    backgroundColor: "red",
    borderRadius: 30,
  },
  button: {
    color: "white",
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },
});
