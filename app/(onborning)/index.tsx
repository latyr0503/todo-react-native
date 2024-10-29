import React from "react";
import {Image, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function Onboarning() {
  return (
    <LinearGradient
      colors={["#161921", "#0A58A5"]}
      style={styles.container}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
    >
      <Image
        source={require("@/assets/images/xarala logo 1.png")}
        style={styles.image}
      />

      <Link href="/onboarning" style={styles.button}>
        <Text style={styles.buttonText}>Commencer</Text>
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
  image: {
    width: 200,
    height: 150,
    objectFit: "contain",
  },
  buttonText: {
    color: "#0A58A5",
    fontSize: 18,
    padding: 30,
  },
  button : {
    backgroundColor: "#fff",
    width: "50%",
    textAlign: "center",
    padding : 20,
    fontWeight : "bold"
  }
});
